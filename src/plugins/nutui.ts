import {
  Button,
  Icon,
  List,
  Cell,
  CellGroup,
  InfiniteLoading,
  Toast,
  Navbar,
  Tabs,
  TabPane
} from "@nutui/nutui";
const nutui = {
  install: function (Vue:any) {
    Vue.use(Button)
    Vue.use(Icon)
    Vue.use(List)
    Vue.use(Cell)
    Vue.use(CellGroup)
    Vue.use(InfiniteLoading)
    Vue.use(Toast)
    Vue.use(Navbar)
    Vue.use(Tabs)
    Vue.use(TabPane)
  }
}

export default nutui
