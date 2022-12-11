import oracledb from 'oracledb'
import DB from '../connection/connection'
import { fetchAllBillandingData } from '../connection/querys'
import Billanding from '../models/billandingModel'

const billandingController = {
    fetchAllBillanding: async function (_req, res) {
        const result = await DB.connectionDB(fetchAllBillandingData, [], { outFormat: oracledb.OBJECT })
        let billandings = [];
        result.rows.forEach(element => {
            billandings.push(new Billanding(
                element.ID,
                element.BILLLANDINGCODE,
                element.BILLLANDINGSERIAL,
                element.CONTRACTORID,
                element.DRIVERID,
                element.PLATENO,
                element.ORIGINID,
                element.DESTINATIONID,
                element.DESCRIPTION,
                element.BILLLANDINGSTATUSID,
                element.SHIPPINGTYPEID,
                element.LOC_NAME,))
        });
        return res.json(billandings)
    }
}

export default billandingController