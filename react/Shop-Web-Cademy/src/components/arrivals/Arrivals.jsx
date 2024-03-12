import'./arrivals.css'
import Card from '../card/Card'

import cat01img from "./../../img/categories/cat-01.jpg";
import cat02img from "./../../img/categories/cat-02.jpg";
import cat03img from "./../../img/categories/cat-03.jpg";




export default function Arrivals(){

    return(
        <section className="arrivals">
            <div className="container">
                <div className="arrivals_header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals_cards">
                    <Card title="Hoodies & Sweatshirt" img={cat01img} />
                    <Card title="Coats & Parkas" img={cat02img} />
                    <Card title="Tees & T-Shirt" img={cat03img} />
                   
                   
                </div>
            </div>
        </section>

    )}