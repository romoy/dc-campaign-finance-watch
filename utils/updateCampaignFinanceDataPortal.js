"use strict";

const argv = require('minimist')(process.argv);
const bluebird = require('bluebird');
const request = bluebird.promisify(require('request'));
const log = require('loglevel');

// check the last data entry
// request the next data
// insert the data in open data
// loop through until the request for more data return empty

// Contributions
//http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34/query?where=&objectIds=1002&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson

// Expenditures
// http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/35/query?where=&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson

const getDCCampaignLastEntry = () =>
  request({

  });

const getDCGISTDATAAsJSON = (mapServerId, objectId) =>
  request({
    url: 'http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/'+ mapServerId +'/query?where=',
    json: true,
    method: 'GET',
    qs: {
    objectIds : objectId,
      f: pjson
    }
  });

const updateDCCampaignData = () =>
  request({

  });

const mapServerId = 35;
getDCCampaignLastEntry(mapServerId)
  .then(resp => {
      // get id
      const objectId = '';
      return getDCGISTDATAAsJSON(objectId)
        .then(resp => {
          // response json
          // insert json
          return updateDCCampaignData();
        });

  });
