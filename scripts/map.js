require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
], function (Map, MapView, Search, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [15.24846, 59.25452],
        zoom: 16
    });

    var search = new Search({
        view: view
    });

    view.ui.add(search, "top-right");

    view.on("click", function (evt) {
        search.clear();
        view.popup.clear();
        if (search.activeSource) {
            var geocoder = search.activeSource.locator; // World geocode service
            var params = {
                location: evt.mapPoint
            };
            geocoder.locationToAddress(params).then(
                function (response) {
                    // Show the address found
                    var address = response.address;
                    showPopup(address, evt.mapPoint);
                },
                function (err) {
                    // Show no address found
                    showPopup("No address found.", evt.mapPoint);
                }
            );
        }
    });

    function showPopup(address, pt) {
        view.popup.open({
            title:
                +Math.round(pt.longitude * 100000) / 100000 +
                "," +
                Math.round(pt.latitude * 100000) / 100000,
            content: address,
            location: pt
        });
    }

    /* var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    var point = {
        type: "point",
        longitude: 15.240499038,
        latitude: 59.252665656
    };

    var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // orange
        outline: {
            color: [255, 255, 255], // white
            width: 1
        }
    };

    var pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
    });

    graphicsLayer.add(pointGraphic); */

    // Add a blue location pin
    /* var pictureGraphic = new Graphic({
        geometry: {
            type: "point",
            longitude: 15.240499038,
            latitude: 59.252665656
        },
        symbol: {
            type: "picture-marker",
            url: "https://developers.arcgis.com/labs/images/bluepin.png",
            width: "14px",
            height: "26px"
        }
    });

    graphicsLayer.add(pictureGraphic); */

    // Add text below the pin
    /* var textGraphic = new Graphic({
        geometry: {
            type: "point",
            longitude: 15.240499038,
            latitude: 59.252665656
        },
        symbol: {
            type: "text",
            color: [25, 25, 25],
            haloColor: [255, 255, 255],
            haloSize: "1px",
            text: "Örebro Universitet!",
            xoffset: 0,
            yoffset: -25,
            font: {
                size: 12
            }
        }
    });

    graphicsLayer.add(textGraphic); */
});
