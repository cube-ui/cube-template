# cube-template

cube-ui template for Vue-cli

在 cube-template 中特殊的配置项。

- Use post-compile?

  后编译，详细文档 https://didi.github.io/cube-ui/#/zh-CN/docs/post-compile

- Import type

  引入类型，可以是：

  - 按需引入（推荐）：https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start#cube-按需引入-anchor
  - 全部引入：https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start#cube-全部引入-anchor

- Custom theme?

  自定义主题，使用后编译的情况下可用；会在 `src/` 目录下创建一个 `theme.styl` 的文件，定义各种变量，参考 https://didi.github.io/cube-ui/#/zh-CN/docs/theme

- Use rem layout?

  rem 布局，使用后编译的情况下可用；使用 [postcss-px2rem](https://github.com/songsiqi/px2rem-postcss) 插件完成 px 到 rem 的转换，如果要修改基准值，修改 `.postcssrc.js` 文件中的 "remUnit" 的值即可。

- Use vw layout?

  vw 布局，使用后编译的情况下且不是 rem 布局的情况下可用；使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 插件完成 px 到 vw 的转换。

- Use amfe-flexible?

  当使用 rem 布局的时候，可以选择使用 [lib-flexible 2.x](https://github.com/amfe/lib-flexible) 来动态计算更新 rem 的值；当然也可以使用你自定义的 rem 计算方式，但是一定不能动态去需改 viewport，viewport width 只支持为 device-width 的情况

> **使用rem/vw布局时**: 如果你的 remUnit 不能设置为 37.5，或者 viewportWidth 不是 375，可以使用 [postcss-design-convert](https://www.npmjs.com/package/postcss-design-convert) 插件完成相应转换。

All cube-template special options.

- Use post-compile?

  About post-compile https://didi.github.io/cube-ui/#/en-US/docs/post-compile

- Import type

  Partly: https://didi.github.io/cube-ui/#/en-US/docs/quick-start#cube-Importondemand-anchor
  Fully: https://didi.github.io/cube-ui/#/en-US/docs/quick-start#cube-Fullyimport-anchor

- Custom theme?

  https://didi.github.io/cube-ui/#/en-US/docs/theme

- Use rem layout?

  Use rem to layout Page, if you want to change the basic rem unit value, then just modify the `remUnit` value in file `.postcssrc.js`.

- Use vw layout?

  Use vw to layout Page, this use [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) plugin to process px to vw.

- Use amfe-flexible?

  Use https://github.com/amfe/lib-flexible to set `rem` value
