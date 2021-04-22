import React from 'react'

 const Food = () => {
    return (
        <div>

            <div id="food">
                <h2>Types of Food</h2>
                <div class="food-container container">
                    <div class="food-type fruit">
                        <div class="img-container">
                            <img src="/img/food1.jpg" alt="not found"/>
                                <div class="img-content">
                                    <h3>Fruit</h3>
                                    <a href="https://en.wikipedia.org/wiki/Fruit" class="btn btn-primary" >Learn More</a>
                                </div>
                </div>
                        </div>
                        <div class="food-type vegetable">
                            <div class="img-container">
                                <img src="/img/food2.jpg" alt="not found" />
                                    <div class="img-content">
                                        <h3>Vegetable</h3>
                                        <a href="https://en.wikipedia.org/wiki/vegetable" class="btn btn-primary" >Learn More</a>
                                    </div>
                </div>

                            </div>
                            <div class="food-type grain">
                                <div class="img-container">
                                    <img src="/img/food3.jpg" alt="not found" />
                                        <div class="img-content">
                                            <h3>Grain</h3>
                                            <a href="https://en.wikipedia.org/wiki/grain" class="btn btn-primary" >Learn More</a>
                                        </div>
                </div>
                                </div>

                            </div>
    </div>
                    </div>
    )
}
export default Food;