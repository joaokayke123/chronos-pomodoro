import "./styles/theme.css"
import "./styles/global.css"

import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
    console.log("oi");

return (
    <> 
     <Heading>
        Olá mundo 
        <button>
            <TimerIcon />
        </button>
     </Heading>
     <p> lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus, congue vel laoreet ac, dictum vitae odio. </p> 
    </>
   );
}
