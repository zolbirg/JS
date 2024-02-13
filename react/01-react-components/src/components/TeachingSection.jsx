
import WayToTaech from "./WayToTeach";
import {ways} from "../data";

export default function TeachingSection(){ 
    return (
        <section>
          <h3> What is the strength in, brother?</h3>

          <ul>
            {ways.map((way) =>(
            <WayToTaech key = {way.title} {...way} />))}
          </ul>
        </section>
    )
}