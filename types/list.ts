export interface ListItem {
    text: string;
    value: string;
}

export function  ListOptionMarketNonMarket(){
    const  list:ListItem[] = [
        {value:"non_marketplace",text:"NON MARKETPLACE",},
        {value:"marketplace",text:"MARKETPLACE",},
    ]
    return list;
}


export function  ListOptionKurir(){
    const  list:ListItem[] = [
        {text:"JNT Express",value:"JNT Express",},
        {text:"SiCepat",value:"SiCepat",},
        {text:"JNE Express",value:"JNE Express",},
        {text:"TIKI",value:"TIKI",},
        {text:"POS",value:"POS",},
        {text:"Shopee Express",value:"Shopee Express",},
        {text:"Anteraja",value:"Anteraja",},
        {text:"GoSend",value:"GoSend",},
        {text:"GrabExpress",value:"GrabExpress",},
        {text:"Ninja Express",value:"Ninja Express",},
        {text:"Lion Parcel",value:"Lion Parcel",},
        {text:"Lazada Express",value:"Lazada Express",},
        {text:"Kargo",value:"Kargo",},
        {text:"Others",value:"Others",},
    ]
    return list;
}

export function  ListOptionJenisPengiriman(){
    const  list:ListItem[] = [
        {text:"Reg",value:"Reg",},
        {text:"Eko",value:"Eko",},
        {text:"Express",value:"Express",},
        {text:"Same Day",value:"Same Day",},
        {text:"Next Day",value:"Next Day",},
        {text:"Instant",value:"Instant",},
        {text:"Kargo",value:"Kargo",},
        {text:"Others",value:"Others",},
    ]
    return list;
}


export function  ListOptionJalurPengiriman(){
    const  list:ListItem[] = [
        {text:"Darat",value:"Darat",},
        {text:"Udara",value:"Udara",},
        {text:"Multi",value:"Multi",},
    ]
    return list;
}

export function  ListOptionStatusKirim(){
    const  list:ListItem[] = [
        {text:"Dikirim",value:"0",},
        {text:"Diterima",value:"1",},
        {text:"Selesai",value:"2",},
    ]
    return list;
}


export function  ListJenisTransaksiBeli(){
    const  list:ListItem[] = [
        {text:"Import",value:"IMPORT",},
        {text:"Lokal",value:"LOKAL",},
    ]
    return list;
}

export function  ListPosisiJurnal(){
    const  list:ListItem[] = [
        {text:"Debit",value:"D",},
        {text:"Kredit",value:"K",},
    ]
    return list;
}
