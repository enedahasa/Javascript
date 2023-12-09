import { useState } from 'react'
import Tab from './assets/components/Tab';
import Display from './assets/components/Display';
import './App.css'

function App() {
  const tabList = [
    {title: <button type="button">Tab 1</button> , content: "Tab 1 content is showing here."},
    {title: <button type="button">Tab 2</button>, content: "Tab 2 content is showing here."},
    {title: <button type="button">Tab 3</button>, content: "Tab 3 content is showing here."}
  ]

  const [tabIndex, setTabIndex]= useState(0);

  const [tabs, setTabs] = useState(tabList);



  return (
    <>
      <Tab tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex}/>
      <Display tabs={tabs} tabIndex={tabIndex} />
    </>
  )
}

export default App
