
import Tabs from "./tabs"


export default function TabsTest(){

function RandomComponent(){
    return <h1>Some Randome Content</h1>
}
    const tabs=[
        {
            label: 'Tab 1',
            content: <div>This is content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <div><RandomComponent/></div>
        },

    ]

    function handleChange(currentTabIndex){
            console.log(currentTabIndex);
    }
    return(
        <Tabs tabsContent={tabs} onChange={handleChange}/>
    )
}