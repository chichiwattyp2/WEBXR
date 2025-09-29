// pages/marker/marker.js

// Example call chain
createMarkerPackage({
    assetType: window.assetType,
    assetFile: window.assetFile,
    assetParam: window.assetParam,
    markerPatt: markerPattern
})
    .then((pkg) => pkg.serve({ packageType: 'zip' }))
    .then((base64) => {
        // window.location = `data:application/zip;base64,${base64}`;
        // sometimes it doesn't work by using window.location directly, so change to this way
        const link = document.createElement('a');
        link.href = `data:application/zip;base64,${base64}`;
        link.download = 'marker.zip';
        link.click();
    });
