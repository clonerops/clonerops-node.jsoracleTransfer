import _ from 'lodash'
import { fetchAllBillandingData } from '../connection/querys';
import DB from '../connection/connection'
import oracledb from 'oracledb'

const customerController = {
    fetchAllBillanding: async function (req, res) {
        const result = await DB.connectionDB(fetchAllBillandingData, {}, { outFormat: oracledb.OBJECT })

        let Billlandings = []
        result.rows.forEach(element => {
            Billlandings.push({
                billandiSerial: element.BILLLANDINGSERIAL,
                contactorId: element.CONTRACTORID
            })
        });

        return res.json({
            success: true,
            data: Billlandings,
        });
    },
}

export default customerController