For designing the page:
I think I need one container that has two inside of it

<div id="appMainContainer" class="container"> <!--overarching container-->
    <div id="row1" class="row"> <!--top row-->
        <div class="col"> <!--column in top row-->
       <div class="header">Weather App</div>
        </div>
    </div> <!--end top row-->
    <div id="row2" class="row"> <!--row 2 for buttons-->
        <div id="r2c1" class="col"> 
        zip code box
        </div>
        <div id="r2c2" class="col">
        get weather button
        </div>
    </div> <!--going to set the main body now-->
    <div id="mainBodyRow" class="row"> <!--start with one row (which is really our last main row 3)-->
        <div id="mainBodyCol" class="col"> <!--nestle a column inside of that row to put all others inside-->
            <div id="cityRow" class="row">
                <div class="col">
                    <div class="card text-center border-dark mb-3"> <!--style="width: 18rem;" this was in that-->
                        <div class="card-header border-success">City</div>
                        <div class="card-body">
                        <p class="card-text">Lexington</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tempRow" class="row">
                <div class="col">
                  <div class="card text-center border-dark mb-3"> <!--style="width: 18rem;" this was in that-->
                        <div class="card-header border-success">Temperature</div>
                        <div class="card-block">
                            <div class="row">
                                <div class="col-6"> Kelvin
                                </div>
                                <div class="col-6"> Farenheit
                                </div>
                                <div class="col-6"> Celsius
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="conditionRow" class="row">
                <div class="col">
                    <div class="card text-center border-dark mb-3"> <!--style="width: 18rem;" this was in that-->
                        <div class="card-header border-success">Condition</div>
                        <div class="card-body">
                        <p class="card-text">Light Rain</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="otherInfoRow" class="row">
                <div class="col">
                    <div class="card text-center border-dark mb-3"> <!--style="width: 18rem;" this was in that-->
                        <div class="card-header border-success">Other Info</div>
                        <div class="card-body">
                        <p class="card-text">Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>