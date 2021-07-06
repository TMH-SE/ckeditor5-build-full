import * as webpack from 'webpack'
import * as path from 'path'
import * as fs from 'fs'
const TerserPlugin = require('terser-webpack-plugin')

const { styles } = require('@ckeditor/ckeditor5-dev-utils')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath: string): string =>
  path.resolve(appDirectory, relativePath)

const moduleFileExtensions = ['ts', 'tsx']
const resolveModule = (
  resolveFn: (arg: string) => string,
  filePath: string
): string => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

const config: webpack.Configuration = {
  devtool: false,
  performance: { hints: false },
  entry: {
    ckeditor: resolveModule(resolvePath, 'src/ckeditor')
  },
  output: {
    library: 'FullEditor',
    path: resolvePath('lib'),
    filename: 'ckeditor.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            // Preserve CKEditor 5 license comments.
            comments: /^!/
          }
        },
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                },
                minify: true
              })
            }
          }
        ]
      }
    ]
  }
}

export default config
