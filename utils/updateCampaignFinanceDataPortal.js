"use strict";

const argv = require('minimist')(process.argv);
const bluebird = require('bluebird');
const request = bluebird.promisify(require('request'));
const rp = require('request-promise');


// TODO check the last data entry
// TODO request the next data
// TODO insert the data in open data
// TODO loop through until the request for more data return empty

// Contributions
//http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34/query?where=&objectIds=1002&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson
var contributionServerURL = 'http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/34';

// Expenditures
// http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/35/query?where=&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson
var expendituresServerURL = 'http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/35';

// TODO check the return format
// TODO verify the data from the dump

const dcDataStoreSearch = (resourceId, query) =>
  request({
    url: 'http://data.codefordc.org/api/action/datastore_search',
    json: true,
    qs: {
      resource_id: resourceId,
      q: query,
      // limit: '1'
    }
  })
  .then((res) => {
    console.log(JSON.stringify(res,null, 2));
  });

// API reference http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Query_Map_Service_Layer/02r3000000p1000000/
const agolQuery = (baseUrl, searchText) => rp({
  method: 'GET',
  uri: baseUrl +'/query',
  qs: {
    f: 'json',
    text: searchText,
    outFields: '*'
  },
  json: true
})
.then((res) => {
  console.log(JSON.stringify(res,null, 2));
});

agolQuery(contributionServerURL, 'Orange');
agolQuery(expendituresServerURL, 'Orange');
// dcDataStoreSearch('e9c01a67-5bd5-4ecb-b11f-cfcdee43b08a', 'fenty');
