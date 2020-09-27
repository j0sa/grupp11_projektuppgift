require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/symbols/SimpleMarkerSymbol"
], function (Map, MapView, Search, SimpleMarkerSymbol) {

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

    var symbol = {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        style: "square",
        color: "blue",
        size: "8px",  // pixels
        outline: {  // autocasts as new SimpleLineSymbol()
            color: [255, 255, 0],
            width: 3  // points
        }
    };
});
