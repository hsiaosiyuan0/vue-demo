import Entry from './components/Entry'
import Datepicker from './components/Datepicker'
import Dialog from './components/Dialog'
import Tooltip from './components/Tooltip'
import Tree from './components/Tree'
import Dropdown from './components/Dropdown'

export default [{
  path: '',
  redirect: '/entry'
}, {
  path: '/entry',
  component: Entry
}, {
  path: '/datepicker',
  component: Datepicker
}, {
  path: '/dialog',
  component: Dialog
}, {
  path: '/tooltip',
  component: Tooltip
}, {
  path: '/tree',
  component: Tree
}, {
  path: '/dropdown',
  component: Dropdown
}]
