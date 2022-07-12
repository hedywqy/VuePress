export const data = JSON.parse("{\"key\":\"v-22a39d25\",\"path\":\"/about.html\",\"title\":\"一级目录\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"二级目录\",\"slug\":\"二级目录\",\"children\":[{\"level\":3,\"title\":\"2.1\",\"slug\":\"_2-1\",\"children\":[]},{\"level\":3,\"title\":\"2.2\",\"slug\":\"_2-2\",\"children\":[]},{\"level\":3,\"title\":\"2.3\",\"slug\":\"_2-3\",\"children\":[]},{\"level\":3,\"title\":\"三级目录\",\"slug\":\"三级目录\",\"children\":[]}]}],\"git\":{\"updatedTime\":1657464170000,\"contributors\":[{\"name\":\"thomas\",\"email\":\"hedywqy@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"about.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
