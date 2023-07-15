const xml2js = require(`xml2js`);
const JSZip = require(`jszip`);
const { readFile } = require(`fs/promises`);

async function importGdtf(buffer, filename) {
    const warnings = [];

    let xmlString = buffer.toString();
  
    if (filename.endsWith(`.gdtf`)) {
      // unzip the .gdtf (zip) file and check its description.xml file
      const zip = await JSZip.loadAsync(buffer);
  
      const descriptionFile = zip.file(`description.xml`);
      if (descriptionFile === null) {
        throw new Error(`The provided .gdtf (zip) file does not contain a 'description.xml' file in the root directory.`);
      }
  
      xmlString = await descriptionFile.async(`string`);
    }
  
    const xml = await xml2js.parseStringPromise(xmlString);

    if (xml["GDTF"] == undefined)
    {
        throw new Error('GDTF is not the root node');       
    }

    return xml;
}

(async () => {

    const filename = "../../../MVR_GDTF_Examples/OnlyGDTF/Generic@LED_RGB8@Updated_fixture_type_to_GDTF_1.0.gdtf";
    var gdftxlm;

    try
    {
        const buffer = await readFile(filename);

        gdftxlm = await importGdtf(buffer, filename);
    }
    catch (error)
    {
        console.error(`Error parsing '${filename}':`);
        console.error(error);
        process.exit(1);           
    }
 
    console.log('GDTF File loaded');
    console.log(gdftxlm);
})();
