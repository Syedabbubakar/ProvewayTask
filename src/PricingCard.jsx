import React, { useState } from "react";

// Reusable RadioSection Component
const RadioSection = ({
    id,
    title,
    discount,
    price,
    originalPrice,
    showDropdown,
    highlight,
    onSelect,
    isSelected
  }) => {

  
    return (
      <div
        onClick={() =>{ 
            onSelect();
        }}
        className="section"
        style={{
          display: showDropdown ? "block" : "flex",
          cursor: "pointer", 
          border:isSelected && "2px solid #ff6b82"
        }}
      >
        {highlight && (
          <span className="highlighted">MOST POPULAR</span>
        )}
  
        <div className="CardSection">
          <div className="cardLeftSect">
            <input
              type="radio"
              name="option"
              id={id}
              checked={isSelected}
              onClick={() => {}}
            />
            <label
              htmlFor={id}
              style={{
                marginLeft: "10px",
                display: "inline-block",
                width: "100%",
              }}
            >
              <div>
                <strong style={{ fontSize: "14px" }}>{title}</strong>{" "}
                <span className="discount">{discount} Off</span>
                {id === 'option1' &&  <div style={{ fontSize: "12px", color: "#000000",marginTop:"5px" }}>
                Standard Price
                </div>  }
            
              </div>
            </label>
          </div>
  
          <div>
            <label
              htmlFor={id}
              style={{
                display: "inline-block",
                width: "100%",
              }}
            >
              <span style={{ float: "right" }}>${price} USD</span>
              <div style={{ fontSize: "12px", color: "#999"}}>
                <del style={{marginTop:"3px" }}>${originalPrice} USD</del>
              </div>
            </label>
          </div>
        </div>
  
        {/* Hidden Section */}
        { showDropdown  && (
            <div className="dropdown-container">
            <div className="dropdown-item">
              <div className="item-number">#1</div>
              <div>
              <label>Size</label>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              </div>
             <div>
             <label>Colour</label>
              <select>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
              </select>
             </div>
            
            </div>
            <div className="dropdown-item">
              <div className="item-number">#2</div>
              <div>
              <label>Size</label>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              </div>
             <div>
             <label>Colour</label>
              <select>
                <option>Black</option>
                <option>White</option>
                <option>Blue</option>
              </select>
             </div>
            </div>
          </div>
        )}
      </div>
    );
  };

// Main PricingCard Component
const PricingCard = () => {
    const [selectedSection, setSelectedSection] = useState('option2');
  return (
    <div className="mainCard">
      <div
        className="cardContainer"
      >
        <div style={{marginBottom:"19px"}} >
        <span style={{color:"#C8C8C8"}}>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</span>
        <span style={{ textAlign: "center", color: "#FF6B82 " , fontSize:"20px",fontWeight:"600",margin:"0px 10px"}}>
          YAY! It's BOGO
        </span>
        <span style={{color:"#C8C8C8"}}>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</span>
        </div>
      
        {/* Radio Sections */}
        <RadioSection
          id="option1"
          title="1 Unit"
          discount="10%"
          price="10.00"
          originalPrice="24.00"
          highlight={false}
          showDropdown={selectedSection === "option1"}
          isSelected={selectedSection === "option1"}
          onSelect={() => setSelectedSection("option1")}
        />
        <RadioSection
          id="option2"
          title="2 Units"
          discount="20%"
          price="18.00"
          originalPrice="24.00"
          highlight={true}
          showDropdown={selectedSection === "option2"}
          isSelected={selectedSection === "option2"}
          onSelect={() => setSelectedSection("option2")}
        />
        <RadioSection
          id="option3"
          title="3 Units"
          discount="30%"
          price="24.00"
          originalPrice="24.00"
          highlight={false}
          showDropdown={selectedSection === "option3"}
          isSelected={selectedSection === "option3"}
          onSelect={() => setSelectedSection("option3")}
        />

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "20px" ,width:"100%"}}>
            <div className="totalSection">
                <span className="freeDelivery">Free Delivery</span>
                <span className="total">Total : $18.00 USD</span>
            </div>
          <button
          className="AddToCardButton"
    
          >
            + Add to Cart
          </button>
          <div className="copyWrite">
<span>@ Powered by Pumper</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingCard;
