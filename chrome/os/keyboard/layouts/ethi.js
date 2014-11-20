// Copyright 2013 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//

/**
 * @fileoverview VK layout definition for Ethics.
 */

var ETHI_LAYOUT = {
  'id': 'ethi',
  'title': '\u130D\u12D5\u12DD',
  'mappings': {
    '': {
      '': '`1234567890-=' +
          '\u1245\u12CD\u12A5\u122D\u1275\u12ED\u12A1\u12A2\u12A6\u1355[]\\' +
          '\u12A0\u1235\u12F5\u134D\u130D\u1205\u1305\u12AD\u120D\u1364\'' +
          '\u12DD\u123D\u127D\u126D\u1265\u1295\u121D\u1363./'
    },
    's': {
      '': '~!@#$%^&*()_+' +
          '\u1245\u12CD\u12A4\u122D\u1325\u12ED\u12A1\u12A5\u12A6\u1335{}|' +
          '\u12D0\u133D\u12F5\u134D\u130D\u1215\u1305\u12BD\u120D\u1361"' +
          '\u12E5\u123D\u132D\u126D\u1265\u129D\u121D\u2039\u203A?'
    },
    'l': {
      '': '`1234567890-=' +
          '\u1245\u12CD\u12A4\u122D\u1325\u12ED\u12A1\u12A5\u12A6\u1335[]\\' +
          '\u12D0\u133D\u12F5\u134D\u130D\u1215\u1305\u12BD\u120D\u1361\'' +
          '\u12E5\u123D\u132D\u126D\u1265\u129D\u121D,./'
    },
    'sl': {
      '': '~!@#$%^&*()_+' +
          '\u1245\u12CD\u12A5\u122D\u1275\u12ED\u12A1\u12A2\u12A6\u1355{}|' +
          '\u12A0\u1235\u12F5\u134D\u130D\u1205\u1305\u12AD\u120D\u1364"' +
          '\u12DD\u123D\u127D\u126D\u1265\u1295\u121D<>?'
    },
    'c': {
      '': '`\u1369\u136A\u136B\u136C\u136D\u136E\u136F\u1370\u13710-=' +
          '\u1255\u12CD\u12A5\u122D\u1275\u12ED\u12A1\u12A2\u12A6\u1355[]\\' +
          '\u12A0\u1225\u12FD\u134D\u131D\u1285\u1305\u2DCD\u120D\u1364\'' +
          '\u2DB5\u2DA5\u2DAD\u126D\u1265\u1295\u121D\u1363./'
    },
    'sc': {
      '': '~\u1369\u136A\u136B\u136C\u136D\u136E\u136F\u1370\u13710_+' +
          '\u2DC5\u12CD\u12A4\u122D\u1325\u12ED\u12A1\u12A5\u12A6\u1335{}|' +
          '\u12D0\u1345\u12FD\u134D\u2DDD\u1285\u1305\u2DD5\u120D\u1361"' +
          '\u2DB5\u2DA5\u2DBD\u126D\u1265\u129D\u121D\u2039\u203A?'
    }
  },
  'transform': {
    '\u128A\u001D?\u12A5': '\u128C',
    '\u1221\u001D?\u12A0': '\u1227',
    '\u1222\u001D?\u12A5': '\u1224',
    '\u124A\u001D?\u12A5': '\u124C',
    '\u125A\u001D?\u12A5': '\u125C',
    '\u1281\u001D?\u12A0': '\u128B',
    '\u1281\u001D?\u12A1\u001D?': '\u128D',
    '\u1281\u001D?\u12A2\u001D?': '\u128A',
    '\u1281\u001D?\u12A5': '\u1288',
    '\u1281\u001D?\u12A4\u001D?': '\u128C',
    '\u1282\u001D?\u12A5': '\u1284',
    '\u1284\u001D?\u12A4\u001D?': '\u1288',
    '\u1280\u001D?\u12A6\u001D?': '\u1287',
    '\u1286\u001D?\u12A0': '\u1287',
    '\u12D2\u001D?\u12A5': '\u12D4',
    //'\u12D0\u001D?\u12A0': '\u12A3',
    '\u12B2\u001D?\u12A5': '\u12B4',
    '\u12C2\u001D?\u12A5': '\u12C2',
    '\u1312\u001D?\u12A5': '\u1314',
    '\u2D94\u001D?\u12A5': '\u2D95',
    '\u1342\u001D?\u12A5': '\u1344',
    '\u1346\u001D?\u12A0': '\u1347',
    '\u1381\u001D?\u12A5': '\u1382',
    '\u1385\u001D?\u12A5': '\u1386',
    '\u138B\u001D?\u12A5': '\u138A',
    '\u138F\u001D?\u12A5': '\u138E',
    '\u1372\u001D?0': '\u137B',
    '\u1201\u001D?\u12A0': '\u128B',
    '\u1201\u001D?\u12A1\u001D?': '\u128D',
    '\u1201\u001D?\u12A2\u001D?': '\u128A',
    '\u1201\u001D?\u12A5': '\u1288',
    '\u1201\u001D?\u12A4\u001D?': '\u128C',
    '\u1202\u001D?\u12A5': '\u1204',
    '\u1206\u001D?\u12A0': '\u1207',
    '\u1209\u001D?\u12A0': '\u120F',
    '\u120A\u001D?\u12A5': '\u120C',
    '\u120E\u001D?\u12A0': '\u2D80',
    '\u1211\u001D?\u12A0': '\u1217',
    '\u1212\u001D?\u12A5': '\u1214',
    '\u1219\u001D?\u12A0': '\u121F',
    '\u121A\u001D?\u12A5': '\u121C',
    '\u121E\u001D?\u12A0': '\u2D81',
    '\u121D\u12ED\u12A0': '\u1359',
    '\u1225\u001D?\u12A0': '\u1223',
    '\u1225\u001D?\u12A1\u001D?': '\u1221',
    '\u1225\u001D?\u12A2\u001D?': '\u1222',
    '\u1225\u001D?\u12A4\u001D?': '\u1224',
    '\u1225\u001D?\u12A5': '\u1220',
    '\u1225\u001D?\u12A6\u001D?': '\u1226',
    '\u1229\u001D?\u12A0': '\u122F',
    '\u122A\u001D?\u12A5': '\u122C',
    '\u122E\u001D?\u12A0': '\u2D82',
    '\u122D\u12ED\u12A0': '\u1358',
    '\u1231\u001D?\u12A0': '\u1237',
    '\u1232\u001D?\u12A5': '\u1234',
    '\u1236\u001D?\u12A0': '\u2D83',
    '\u1239\u001D?\u12A0': '\u123F',
    '\u123A\u001D?\u12A5': '\u123C',
    '\u123E\u001D?\u12A0': '\u2D84',
    '\u1241\u001D?\u12A0': '\u124B',
    '\u1241\u001D?\u12A1\u001D?': '\u124D',
    '\u1241\u001D?\u12A2\u001D?': '\u124A',
    '\u1241\u001D?\u12A4\u001D?': '\u124C',
    '\u1241\u001D?\u12A5': '\u1248',
    '\u1242\u001D?\u12A5': '\u1244',
    '\u1246\u001D?\u12A0': '\u1247',
    '\u1246\u001D?\u12A6\u001D?': '\u1248',
    '\u1255\u12A1\u001D?\u12A0': '\u125B',
    '\u1255\u12A1\u001D?\u12A2\u001D?': '\u125A',
    '\u1255\u12A1\u001D?\u12A4\u001D?': '\u125C',
    '\u1255\u12A1\u001D?\u12A5': '\u1258',
    '\u1255\u12A1\u001D?\u12A1\u001D?': '\u1251',
    '\u1252\u001D?\u12A5': '\u1254',
    '\u1261\u001D?\u12A0': '\u1267',
    '\u1262\u001D?\u12A5': '\u1264',
    '\u1266\u001D?\u12A0': '\u2D85',
    '\u1269\u001D?\u12A0': '\u126F',
    '\u126A\u001D?\u12A5': '\u126C',
    '\u1271\u001D?\u12A0': '\u1277',
    '\u1272\u001D?\u12A5': '\u1274',
    '\u1276\u001D?\u12A0': '\u2D86',
    '\u1279\u001D?\u12A0': '\u127F',
    '\u127A\u001D?\u12A5': '\u127C',
    '\u127E\u001D?\u12A0': '\u2D87',
    '\u1286\u001D?\u12A6\u001D?': '\u1288',
    '\u1205\u1205\u12A0': '\u1283',
    '\u1205\u1205\u12A1\u001D?': '\u1281',
    '\u1205\u1205\u12A2\u001D?': '\u1282',
    '\u1205\u1205\u12A4\u001D?': '\u1284',
    '\u1205\u1205\u12A5': '\u1280',
    '\u1205\u1205\u12A6\u001D?': '\u1286',
    '\u1291\u001D?\u12A0': '\u1297',
    '\u1292\u001D?\u12A5': '\u1294',
    '\u1296\u001D?\u12A0': '\u2D88',
    '\u1299\u001D?\u12A0': '\u129F',
    '\u129A\u001D?\u12A5': '\u129C',
    '\u129E\u001D?\u12A0': '\u2D89',
    '\u12A2\u001D?\u12A5': '\u12A4',
    '\u12D5\u001D?\u12A5': '\u12D0',
    '\u12D5\u001D?\u12A1\u001D?': '\u12D1',
    '\u12D5\u001D?\u12A2\u001D?': '\u12D2',
    '\u12D5\u001D?\u12A0': '\u12D3',
    '\u12D5\u001D?\u12A6\u001D?': '\u12D6',
    '\u12D3\u001D?\u12A0': '\u12D0',
    '\u12A9\u001D?\u12A0': '\u12B3',
    '\u12A9\u001D?\u12A1\u001D?': '\u12B5',
    '\u12A9\u001D?\u12A2\u001D?': '\u12B2',
    '\u12A9\u001D?\u12A4\u001D?': '\u12B4',
    '\u12A9\u001D?\u12A5': '\u12B0',
    '\u12AA\u001D?\u12A5': '\u12AC',
    '\u12AE\u001D?\u12A0': '\u12AF',
    '\u12AE\u001D?\u12A6\u001D?': '\u12B0',
    '\u12B9\u001D?\u12A0': '\u12C3',
    '\u12B9\u001D?\u12A1\u001D?': '\u12C5',
    '\u12B9\u001D?\u12A2\u001D?': '\u12C2',
    '\u12B9\u001D?\u12A4\u001D?': '\u12C4',
    '\u12BA\u001D?\u12A5': '\u12BC',
    '\u12BE\u001D?\u12A6\u001D?': '\u12C0',
    '\u12CA\u001D?\u12A5': '\u12CC',
    '\u12CE\u001D?\u12A0': '\u12CF',
    '\u12D9\u001D?\u12A0': '\u12DF',
    '\u12DA\u001D?\u12A5': '\u12DC',
    '\u12DE\u001D?\u12A0': '\u2D8B',
    '\u12E1\u001D?\u12A0': '\u12E7',
    '\u12E2\u001D?\u12A5': '\u12E4',
    '\u12EA\u001D?\u12A5': '\u12EC',
    '\u12EE\u001D?\u12A0': '\u12EF',
    '\u12F1\u001D?\u12A0': '\u12F7',
    '\u12F2\u001D?\u12A5': '\u12F4',
    '\u12F6\u001D?\u12A0': '\u2D8C',
    '\u12F9\u001D?\u12A0': '\u12FF',
    '\u12FA\u001D?\u12A5': '\u12FC',
    '\u12FE\u001D?\u12A0': '\u2D8D',
    '\u1301\u001D?\u12A0': '\u1307',
    '\u1302\u001D?\u12A5': '\u1304',
    '\u1306\u001D?\u12A0': '\u2D8E',
    '\u1309\u001D?\u12A0': '\u1313',
    '\u1309\u001D?\u12A1\u001D?': '\u1315',
    '\u1309\u001D?\u12A2\u001D?': '\u1312',
    '\u1309\u001D?\u12A4\u001D?': '\u1314',
    '\u1309\u001D?\u12A5': '\u1310',
    '\u130A\u001D?\u12A5': '\u130C',
    '\u130E\u001D?\u12A0': '\u130F',
    '\u130E\u001D?\u12A6\u001D?': '\u1310',
    '\u1319\u001D?\u12A0': '\u131F',
    '\u1319\u001D?\u12A1\u001D?': '\u2D96',
    '\u1319\u001D?\u12A2\u001D?': '\u2D94',
    '\u1319\u001D?\u12A4\u001D?': '\u2D95',
    '\u1319\u001D?\u12A5': '\u2D93',
    '\u131A\u001D?\u12A5': '\u131C',
    '\u1321\u001D?\u12A0': '\u1327',
    '\u1322\u001D?\u12A5': '\u1324',
    '\u1326\u001D?\u12A0': '\u2D8F',
    '\u1329\u001D?\u12A0': '\u132F',
    '\u132E\u001D?\u12A0': '\u2D90',
    '\u1331\u001D?\u12A0': '\u1337',
    '\u1336\u001D?\u12A0': '\u2D91',
    '\u1339\u001D?\u12A0': '\u133F',
    '\u133A\u001D?\u12A5': '\u133C',
    '\u1345\u001D?\u12A1\u001D?': '\u1341',
    '\u1345\u001D?\u12A2\u001D?': '\u1342',
    '\u1345\u001D?\u12A4\u001D?': '\u1344',
    '\u1345\u001D?\u12A5': '\u1340',
    '\u1345\u001D?\u12A6\u001D?': '\u1346',
    '\u134D\u12ED\u12A0': '\u135A',
    '\u1349\u001D?\u12A0': '\u134F',
    '\u134A\u001D?\u12A5': '\u134C',
    '\u1351\u001D?\u12A0': '\u1357',
    '\u1352\u001D?\u12A5': '\u1354',
    '\u1356\u001D?\u12A0': '\u2D92',
    '\u2DA2\u001D?\u12A5': '\u2DA4',
    '\u2DAA\u001D?\u12A5': '\u2DAC',
    '\u2DB2\u001D?\u12A5': '\u2DB4',
    '\u2DBA\u001D?\u12A5': '\u2DBC',
    '\u2DC2\u001D?\u12A5': '\u2DC4',
    '\u2DCA\u001D?\u12A5': '\u2DCC',
    '\u2DD2\u001D?\u12A5': '\u2DD4',
    '\u2DDA\u001D?\u12A5': '\u2DDC',
    '`\u121D\u12A1\u001D?': '\u1383',
    '`\u121D\u12A2\u001D?': '\u1381',
    '`\u121D\u12A4\u001D?': '\u1382',
    '`\u121D\u12A5': '\u1380',
    '`\u1265\u12A1\u001D?': '\u1387',
    '`\u1265\u12A2\u001D?': '\u1385',
    '`\u1265\u12A4\u001D?': '\u1386',
    '`\u1265\u12A5': '\u1384',
    '`\u134D\u12A1\u001D?': '\u1389',
    '`\u134D\u12A2\u001D?': '\u138B',
    '`\u134D\u12A4\u001D?': '\u138A',
    '`\u134D\u12A5': '\u1388',
    '`\u1355\u12A1\u001D?': '\u138D',
    '`\u1355\u12A2\u001D?': '\u138F',
    '`\u1355\u12A4\u001D?': '\u138E',
    '`\u1355\u12A5': '\u138C',
    '\u1365\u001D?\u1363': ',',
    '\u00AB\u001D?\u2039': '<',
    '\u00BB\u001D?\u203A': '>',
    '`\u1361#': '\u1368',
    '`\u1361\\+': '\u1360',
    '\u1369\u001D?0': '\u1372',
    '\u136A\u001D?0': '\u1373',
    '\u136B\u001D?0': '\u1374',
    '\u136C\u001D?0': '\u1375',
    '\u136D\u001D?0': '\u1376',
    '\u136E\u001D?0': '\u1377',
    '\u136F\u001D?0': '\u1378',
    '\u1370\u001D?0': '\u1379',
    '\u1371\u001D?0': '\u137A',
    '\u1205\u12A0': '\u1203',
    '\u1205\u12A1\u001D?': '\u1201',
    '\u1205\u12A2\u001D?': '\u1202',
    '\u1205\u12A4\u001D?': '\u1204',
    '\u1205\u12A5': '\u1200',
    '\u1205\u12A6\u001D?': '\u1206',
    '\u120D\u12A0': '\u120B',
    '\u120D\u12A1\u001D?': '\u1209',
    '\u120D\u12A2\u001D?': '\u120A',
    '\u120D\u12A4\u001D?': '\u120C',
    '\u120D\u12A5': '\u1208',
    '\u120D\u12A6\u001D?': '\u120E',
    '\u1215\u12A0': '\u1213',
    '\u1215\u12A1\u001D?': '\u1211',
    '\u1215\u12A2\u001D?': '\u1212',
    '\u1215\u12A4\u001D?': '\u1214',
    '\u1215\u12A5': '\u1210',
    '\u1215\u12A6\u001D?': '\u1216',
    '\u121D\u12A0': '\u121B',
    '\u121D\u12A1\u001D?': '\u1219',
    '\u121D\u12A2\u001D?': '\u121A',
    '\u121D\u12A4\u001D?': '\u121C',
    '\u121D\u12A5': '\u1218',
    '\u121D\u12A6\u001D?': '\u121E',
    '\u1235\u1235': '\u1225',
    '\u122D\u12A0': '\u122B',
    '\u122D\u12A1\u001D?': '\u1229',
    '\u122D\u12A2\u001D?': '\u122A',
    '\u122D\u12A4\u001D?': '\u122C',
    '\u122D\u12A5': '\u1228',
    '\u122D\u12A6\u001D?': '\u122E',
    '\u1235\u12A0': '\u1233',
    '\u1235\u12A1\u001D?': '\u1231',
    '\u1235\u12A2\u001D?': '\u1232',
    '\u1235\u12A4\u001D?': '\u1234',
    '\u1235\u12A5': '\u1230',
    '\u1235\u12A6\u001D?': '\u1236',
    '\u123D\u12A0': '\u123B',
    '\u123D\u12A1\u001D?': '\u1239',
    '\u123D\u12A2\u001D?': '\u123A',
    '\u123D\u12A4\u001D?': '\u123C',
    '\u123D\u12A5': '\u1238',
    '\u123D\u12A6\u001D?': '\u123E',
    '\u1245\u12A0': '\u1243',
    '\u1245\u12A1\u001D?': '\u1241',
    '\u1245\u12A2\u001D?': '\u1242',
    '\u1245\u12A4\u001D?': '\u1244',
    '\u1245\u12A5': '\u1240',
    '\u1245\u12A6\u001D?': '\u1246',
    '\u1255\u12A0': '\u1253',
    '\u1255\u12A2\u001D?': '\u1252',
    '\u1255\u12A4\u001D?': '\u1254',
    '\u1255\u12A5': '\u1250',
    '\u1255\u12A6\u001D?': '\u1256',
    '\u1265\u12A0': '\u1263',
    '\u1265\u12A1\u001D?': '\u1261',
    '\u1265\u12A2\u001D?': '\u1262',
    '\u1265\u12A4\u001D?': '\u1264',
    '\u1265\u12A5': '\u1260',
    '\u1265\u12A6\u001D?': '\u1266',
    '\u126D\u12A0': '\u126B',
    '\u126D\u12A1\u001D?': '\u1269',
    '\u126D\u12A2\u001D?': '\u126A',
    '\u126D\u12A4\u001D?': '\u126C',
    '\u126D\u12A5': '\u1268',
    '\u126D\u12A6\u001D?': '\u126E',
    '\u1275\u12A0': '\u1273',
    '\u1275\u12A1\u001D?': '\u1271',
    '\u1275\u12A2\u001D?': '\u1272',
    '\u1275\u12A4\u001D?': '\u1274',
    '\u1275\u12A5': '\u1270',
    '\u1275\u12A6\u001D?': '\u1276',
    '\u127D\u12A0': '\u127B',
    '\u127D\u12A1\u001D?': '\u1279',
    '\u127D\u12A2\u001D?': '\u127A',
    '\u127D\u12A4\u001D?': '\u127C',
    '\u127D\u12A5': '\u1278',
    '\u127D\u12A6\u001D?': '\u127E',
    '\u1285\u12A0': '\u1283',
    '\u1285\u12A1\u001D?': '\u1281',
    '\u1285\u12A2\u001D?': '\u1282',
    '\u1285\u12A4\u001D?': '\u1284',
    '\u1285\u12A5': '\u1280',
    '\u1285\u12A6\u001D?': '\u1286',
    '\u1295\u12A0': '\u1293',
    '\u1295\u12A1\u001D?': '\u1291',
    '\u1295\u12A2\u001D?': '\u1292',
    '\u1295\u12A4\u001D?': '\u1294',
    '\u1295\u12A5': '\u1290',
    '\u1295\u12A6\u001D?': '\u1296',
    '\u129D\u12A0': '\u129B',
    '\u129D\u12A1\u001D?': '\u1299',
    '\u129D\u12A2\u001D?': '\u129A',
    '\u129D\u12A4\u001D?': '\u129C',
    '\u129D\u12A5': '\u1298',
    '\u129D\u12A6\u001D?': '\u129E',
    '\u12A0\u12A1\u001D?': '\u12A1',
    '\u12A0\u12A2\u001D?': '\u12A2',
    '\u12A0\u12A6\u001D?': '\u12A6',
    '\u12D0\u001D?\u12A1\u001D?': '\u12D1',
    '\u12D0\u001D?\u12A2\u001D?': '\u12D2',
    '\u12D0\u001D?\u12A0': '\u12D3',
    '\u12D0\u001D?\u12A6\u001D?': '\u12D6',
    '\u12A1\u001D?\u12A1\u001D?': '\u12D1',
    '\u12A2\u001D?\u12A2\u001D?': '\u12D2',
    '\u12A0\u12A0': '\u12D3',
    '\u12A6\u001D?\u12A6\u001D?': '\u12D6',
    '\u12A5\u12A1\u001D?': '\u12A1',
    '\u12A5\u12A2\u001D?': '\u12A2',
    '\u12A5\u12A0': '\u12A3',
    '\u12A5\u12A6\u001D?': '\u12A6',
    '\u12A5\u12A5': '\u12D5',
    '\u12A0\u12A5': '\u12A7',
    '\u12AD\u12A0': '\u12AB',
    '\u12AD\u12A1\u001D?': '\u12A9',
    '\u12AD\u12A2\u001D?': '\u12AA',
    '\u12AD\u12A4\u001D?': '\u12AC',
    '\u12AD\u12A5': '\u12A8',
    '\u12AD\u12A6\u001D?': '\u12AE',
    '\u12BD\u12A0': '\u12BB',
    '\u12BD\u12A1\u001D?': '\u12B9',
    '\u12BD\u12A2\u001D?': '\u12BA',
    '\u12BD\u12A4\u001D?': '\u12BC',
    '\u12BD\u12A5': '\u12B8',
    '\u12BD\u12A6\u001D?': '\u12BE',
    '\u12CD\u12A0': '\u12CB',
    '\u12CD\u12A1\u001D?': '\u12C9',
    '\u12CD\u12A2\u001D?': '\u12CA',
    '\u12CD\u12A4\u001D?': '\u12CC',
    '\u12CD\u12A5': '\u12C8',
    '\u12CD\u12A6\u001D?': '\u12CE',
    '\u12DD\u12A0': '\u12DB',
    '\u12DD\u12A1\u001D?': '\u12D9',
    '\u12DD\u12A2\u001D?': '\u12DA',
    '\u12DD\u12A4\u001D?': '\u12DC',
    '\u12DD\u12A5': '\u12D8',
    '\u12DD\u12A6\u001D?': '\u12DE',
    '\u12E5\u12A0': '\u12E3',
    '\u12E5\u12A1\u001D?': '\u12E1',
    '\u12E5\u12A2\u001D?': '\u12E2',
    '\u12E5\u12A4\u001D?': '\u12E4',
    '\u12E5\u12A5': '\u12E0',
    '\u12E5\u12A6\u001D?': '\u12E6',
    '\u12ED\u12A0': '\u12EB',
    '\u12ED\u12A1\u001D?': '\u12E9',
    '\u12ED\u12A2\u001D?': '\u12EA',
    '\u12ED\u12A4\u001D?': '\u12EC',
    '\u12ED\u12A5': '\u12E8',
    '\u12ED\u12A6\u001D?': '\u12EE',
    '\u12F5\u12A0': '\u12F3',
    '\u12F5\u12A1\u001D?': '\u12F1',
    '\u12F5\u12A2\u001D?': '\u12F2',
    '\u12F5\u12A4\u001D?': '\u12F4',
    '\u12F5\u12A5': '\u12F0',
    '\u12F5\u12A6\u001D?': '\u12F6',
    '\u12FD\u12A0': '\u12FB',
    '\u12FD\u12A1\u001D?': '\u12F9',
    '\u12FD\u12A2\u001D?': '\u12FA',
    '\u12FD\u12A4\u001D?': '\u12FC',
    '\u12FD\u12A5': '\u12F8',
    '\u12FD\u12A6\u001D?': '\u12FE',
    '\u1305\u12A0': '\u1303',
    '\u1305\u12A1\u001D?': '\u1301',
    '\u1305\u12A2\u001D?': '\u1302',
    '\u1305\u12A4\u001D?': '\u1304',
    '\u1305\u12A5': '\u1300',
    '\u1305\u12A6\u001D?': '\u1306',
    '\u130D\u12A0': '\u130B',
    '\u130D\u12A1\u001D?': '\u1309',
    '\u130D\u12A2\u001D?': '\u130A',
    '\u130D\u12A4\u001D?': '\u130C',
    '\u130D\u12A5': '\u1308',
    '\u130D\u12A6\u001D?': '\u130E',
    '\u131D\u12A0': '\u131B',
    '\u131D\u12A1\u001D?': '\u1319',
    '\u131D\u12A2\u001D?': '\u131A',
    '\u131D\u12A4\u001D?': '\u131C',
    '\u131D\u12A5': '\u1318',
    '\u131D\u12A6\u001D?': '\u131E',
    '\u1325\u12A0': '\u1323',
    '\u1325\u12A1\u001D?': '\u1321',
    '\u1325\u12A2\u001D?': '\u1322',
    '\u1325\u12A4\u001D?': '\u1324',
    '\u1325\u12A5': '\u1320',
    '\u1325\u12A6\u001D?': '\u1326',
    '\u132D\u12A0': '\u132B',
    '\u132D\u12A1\u001D?': '\u1329',
    '\u132D\u12A2\u001D?': '\u132A',
    '\u132D\u12A4\u001D?': '\u132C',
    '\u132D\u12A5': '\u1328',
    '\u132D\u12A6\u001D?': '\u132E',
    '\u1335\u12A0': '\u1333',
    '\u1335\u12A1\u001D?': '\u1331',
    '\u1335\u12A2\u001D?': '\u1332',
    '\u1335\u12A4\u001D?': '\u1334',
    '\u1335\u12A5': '\u1330',
    '\u1335\u12A6\u001D?': '\u1336',
    '\u133D\u12A0': '\u133B',
    '\u133D\u12A1\u001D?': '\u1339',
    '\u133D\u12A2\u001D?': '\u133A',
    '\u133D\u12A4\u001D?': '\u133C',
    '\u133D\u12A5': '\u1338',
    '\u133D\u12A6\u001D?': '\u133E',
    '\u1345\u001D?\u12A0': '\u1343',
    '\u133D\u133D': '\u1345',
    '\u134D\u12A0': '\u134B',
    '\u134D\u12A1\u001D?': '\u1349',
    '\u134D\u12A2\u001D?': '\u134A',
    '\u134D\u12A4\u001D?': '\u134C',
    '\u134D\u12A5': '\u1348',
    '\u134D\u12A6\u001D?': '\u134E',
    '\u1355\u12A0': '\u1353',
    '\u1355\u12A1\u001D?': '\u1351',
    '\u1355\u12A2\u001D?': '\u1352',
    '\u1355\u12A4\u001D?': '\u1354',
    '\u1355\u12A5': '\u1350',
    '\u1355\u12A6\u001D?': '\u1356',
    '\u2DA5\u12A0': '\u2DA3',
    '\u2DA5\u12A1\u001D?': '\u2DA1',
    '\u2DA5\u12A2\u001D?': '\u2DA2',
    '\u2DA5\u12A4\u001D?': '\u2DA4',
    '\u2DA5\u12A5': '\u2DA0',
    '\u2DA5\u12A6\u001D?': '\u2DA6',
    '\u2DAD\u12A0': '\u2DAB',
    '\u2DAD\u12A1\u001D?': '\u2DA9',
    '\u2DAD\u12A2\u001D?': '\u2DAA',
    '\u2DAD\u12A4\u001D?': '\u2DAC',
    '\u2DAD\u12A5': '\u2DA8',
    '\u2DAD\u12A6\u001D?': '\u2DAE',
    '\u2DB5\u12A0': '\u2DB3',
    '\u2DB5\u12A1\u001D?': '\u2DB1',
    '\u2DB5\u12A2\u001D?': '\u2DB2',
    '\u2DB5\u12A4\u001D?': '\u2DB4',
    '\u2DB5\u12A5': '\u2DB0',
    '\u2DB5\u12A6\u001D?': '\u2DB6',
    '\u2DBD\u12A0': '\u2DBB',
    '\u2DBD\u12A1\u001D?': '\u2DB9',
    '\u2DBD\u12A2\u001D?': '\u2DBA',
    '\u2DBD\u12A4\u001D?': '\u2DBC',
    '\u2DBD\u12A5': '\u2DB8',
    '\u2DBD\u12A6\u001D?': '\u2DBE',
    '\u2DC5\u12A0': '\u2DC3',
    '\u2DC5\u12A1\u001D?': '\u2DC1',
    '\u2DC5\u12A2\u001D?': '\u2DC2',
    '\u2DC5\u12A4\u001D?': '\u2DC4',
    '\u2DC5\u12A5': '\u2DC0',
    '\u2DC5\u12A6\u001D?': '\u2DC6',
    '\u2DCD\u12A0': '\u2DCB',
    '\u2DCD\u12A1\u001D?': '\u2DC9',
    '\u2DCD\u12A2\u001D?': '\u2DCA',
    '\u2DCD\u12A4\u001D?': '\u2DCC',
    '\u2DCD\u12A5': '\u2DC8',
    '\u2DCD\u12A6\u001D?': '\u2DCE',
    '\u2DD5\u12A0': '\u2DD3',
    '\u2DD5\u12A1\u001D?': '\u2DD1',
    '\u2DD5\u12A2\u001D?': '\u2DD2',
    '\u2DD5\u12A4\u001D?': '\u2DD4',
    '\u2DD5\u12A5': '\u2DD0',
    '\u2DD5\u12A6\u001D?': '\u2DD6',
    '\u2DDD\u12A0': '\u2DDB',
    '\u2DDD\u12A1\u001D?': '\u2DD9',
    '\u2DDD\u12A2\u001D?': '\u2DDA',
    '\u2DDD\u12A4\u001D?': '\u2DDC',
    '\u2DDD\u12A5': '\u2DD8',
    '\u2DDD\u12A6\u001D?': '\u2DDE',
    '_\u001D?0': '\u1399',
    '_\u001D?2': '\u1391',
    '_\u001D?3': '\u1392',
    '_\u001D?4': '\u1393',
    '_\u001D?5': '\u1394',
    '_\u001D?6': '\u1395',
    '_\u001D?7': '\u1396',
    '_\u001D?8': '\u1397',
    '_\u001D?9': '\u1398',
    '_\u001D?_\u001D?': '_',
    '\'!': '\u00A1',
    '\u1363\u1363': '\u1365',
    ':-': '\u1366',
    '\u1361\u1361': '\u1362',
    '\u1364\u1364': ';',
    '\u2039\u2039': '\u00AB',
    '\u203A\u203A': '\u00BB',
    '\u1361-': '\u1366',
    '`\\?': '\u1367',
    '\'1': '\u1369',
    '\'2': '\u136A',
    '\'3': '\u136B',
    '\'4': '\u136C',
    '\'5': '\u136D',
    '\'6': '\u136E',
    '\'7': '\u136F',
    '\'8': '\u1370',
    '\'9': '\u1371'
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
cros_vk_loadme(ETHI_LAYOUT);
