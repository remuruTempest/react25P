import { useContext } from "react"
import Accordian from "../accordian"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TikTakToe from "../tik-tak-toe"
import TreeView from "../tree-view"
import { FeaturedFlagContext } from "./context"
import menus from "../tree-view/data"
import TabsTest from "../custom-tabs/tab-test"




export default function FeaturedFlags(){

    const {loading,enabledFlags} =useContext(FeaturedFlagContext);


        const componentToRender=[
            {
                key:'showLightAndDarkMode',
                component:<LightDarkMode/>
            },
            {
                key:'showTikTakToeMode',
                component:<TikTakToe/>
            },
            {
                key:'showRandomColorGenerator',
                component:<RandomColor/>
            },
            {
                key:'showAccorian',
                component:<Accordian/>
            },
            {
                key:'showTreeview',
                component:<TreeView menus={menus}/>
            },
            {
                key:'showCustomTabs',
                component:<TabsTest/>
            }
        ];

        function checkEnableFlags(getCurrentKey){
            return enabledFlags[getCurrentKey]
        }

        if(loading){
            return <h1>Loading Data Please Wait!</h1>

        }
    return(
        <div >
            <h1>Featured flags</h1>

            {
                componentToRender.map(componentItem=>checkEnableFlags(componentItem.key)
            ?componentItem.component
            :null
        )
            }
        </div>
    )
}