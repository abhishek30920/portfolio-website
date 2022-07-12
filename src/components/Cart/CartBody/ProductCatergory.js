import React, {useState} from 'react';
import Products from './Products';
import "./styles/ProductCatergory.css";
import { Link } from 'react-router-dom';

const PRODUCT_CATEGORIES = ["LAPTOPS","TELEVISION","AIR_CONDITIONER", "SMART_DEVICES","MOBILE", "CAMERAS"];

const PRODUCT_BACKGROUND = ["https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://us.123rf.com/450wm/wihtgod/wihtgod1706/wihtgod170600010/79597263-kuala-lumpur-march-13-2017-samsung-and-sony-tv-screens-in-plaza-low-yat-low-yat-plaza-malay-plaza-lo.jpg?ver=6","https://www.cruiseac.com/assets/images/milestones/VrCSctedL5YPvnDQ21G9jpg.jpg","https://thumbs.dreamstime.com/b/smart-home-automation-control-system-innovation-technology-internet-network-concept-smart-home-automation-control-system-125302855.jpg","https://media.istockphoto.com/photos/testing-smartphone-picture-id490910270?b=1&k=20&m=490910270&s=170667a&w=0&h=-WMIWlE0gnegttlHIc-hGv5HKHst5fNtH97onL_s-b0=","https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

function ProductCatergory() {

    const [categoryClicked, setCategoryClicked] = useState("LAPTOPS")

    const handleCategoryClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setCategoryClicked(event.target.id);
    }

    const getProductCategoryCards = () => {
        return <section onClick={handleCategoryClick} id="product-category-cards-wrapper">
            {PRODUCT_CATEGORIES.map((category,index)=>{
                return <section key={index} style={{backgroundImage: "url(" + PRODUCT_BACKGROUND[index]+")", backgroundSize:"cover"}} className="product-category-card" id={category}>
                    <Link className='product-link' id={category} to={`/products/${category}`}>{category}</Link>          
                </section>
            })}
        </section>
    }

  return (
    <section>
        {getProductCategoryCards()}
    </section>
  )
}

export default ProductCatergory