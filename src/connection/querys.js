// export const fetchAllBillandingData = 'select * from maptrnsfc.billlandings'
export const fetchAllBillandingData = 'select * from maptrnsfc.billlandings b join dealer.mobileapp_location t on t.loc_code = b.originid join maptrnsfc.billlandingstatus v on b.billlandingstatusid = v.id';
// export const fetchAllBillandingData = 'select * from maptrnsfc.billlandings b join dealer.mobileapp_location t on t.loc_code = b.originid'