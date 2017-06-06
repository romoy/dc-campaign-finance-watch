"use strict";

const argv = require('minimist')(process.argv);
const bluebird = require('bluebird');
const request = bluebird.promisify(require('request'));
const rp = require('request-promise');
const Koop = require('koop');
const koop = new Koop();
const agol = require('koop-agol');
koop.register(agol);

const express = require('express');
const app = express();
app.use('/koop', koop.server);
app.listen('8080');


// check the last data entry
// request the next data
// insert the data in open data
// loop through until the request for more data return empty

// Contributions
//http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34/query?where=&objectIds=1002&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson
var contributionServerURL = 'http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34';

// Expenditures
// http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/35/query?where=&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson

// TODO check the return format
// TODO verify the data from the dump

const getDCCampaignLastEntry = () =>
  request({
    url: 'http://data.codefordc.org',

  });

const getDCGISTDATAAsJSON = (mapServerId, objectId) =>
  request({
    url: 'http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/' + mapServerId + '/query?where=',
    json: true,
    method: 'GET',
    qs: {
      objectIds: objectId,
      f: 'json'
    }
  });

const dataStoreSearch = () =>
  request({
    url: 'http://data.codefordc.org/api/action/datastore_search',
    json: true,
    qs: {
      resource_id: 'e9c01a67-5bd5-4ecb-b11f-cfcdee43b08a',
      q: 'Artee RT Milligan',
      // limit: '1'
    }
  });

const updateDCCampaignData = () =>
  request({
    url: 'http://data.codefordc.org',
    json: true,
    method: 'PUT'
  });

const mapServerId = 35;

// Once an entry is successful, loop me until a null is hit on the GIS data side
const dcCampaignLastEntry = getDCCampaignLastEntry(mapServerId)
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

const find = () => rp({
  method: 'GET',
  uri: contributionServerURL +'/find',
  qs: {
    f: 'json',
    searchText: 'Jones'

  },
  json: true
})
.then((res) => {
  console.log(JSON.stringify(res));
});

