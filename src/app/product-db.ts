
export interface Proveedor{
    id:number;
    name:string;
    precio:number;
    confianza:string;
    envio:string;
    tiempo_envio:string;
    link:string;
}

export interface Product{
    id:number;
    name:string;
    precio_promedio:number;
    minimo_historico:number;
}

export const PROVEEDORES:Proveedor[]=[
    {id:0,name:"El Corte Inglés",precio:9,confianza:"Alta",envio:"Gratis",tiempo_envio:"Menos de 1 día",link:"https://www.elcorteingles.es/"},
    {id:1,name:"Ebay",precio:10,confianza:"Baja",envio:"Gratis",tiempo_envio:"En un día",link:"https://www.ebay.es/"},
    {id:2,name:"Carefour",precio:12,confianza:"Alta",envio:"Gratis",tiempo_envio:"En un Día",link:"https://www.carrefour.es/?gclid=CjwKCAjw9e6SBhB2EiwA5myr9p2tAbP41pGqvqenRrknGHm8Ku7j-UJ-m8Uir5ajwA_BndhxAEupkRoCokgQAvD_BwE&gclsrc=aw.ds"},
    {id:3,name:"Amazon",precio:15,confianza:"Alta",envio:"Gratis",tiempo_envio:"En un día",link:"https://www.amazon.es/?&tag=hydesnav-21&ref=pd_sl_781oit2196_e&adgrpid=55589983189&hvpone=&hvptwo=&hvadid=366505385431&hvpos=&hvnetw=g&hvrand=8691326256140615830&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1005493&hvtargid=kwd-10573980&hydadcr=4855_1809861&gclid=CjwKCAjw9e6SBhB2EiwA5myr9gV4tMpNh8R8Bou_gYXt8l8a8Ogusip0Vq6BuDK2dQMXzgwo5_pG8RoCFuoQAvD_BwE"},
    {id:4,name:"Aliexpress",precio:8,confianza:"Medio",envio:"Gratis",tiempo_envio:"En un día",link:"https://es.aliexpress.com/?aff_fcid=a64340b160854f32bba3be4361e9c76d-1639637147880-06627-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=a64340b160854f32bba3be4361e9c76d-1639637147880-06627-UneMJZVf&terminal_id=43ea52203c0c498ba0398caa565350b8&&src=google&albch=fbrnd&acnt=379-215-0229&isdl=y&aff_short_key=UneMJZVf&albcp=2039755917&albag=67405005090&slnk=&trgt=kwd-14802285088&plac=&crea=445070754657&netw=g&device=c&mtctp=e&memo1=&albbt=Google_7_fbrnd&aff_platform=google&albagn=888888&isSmbActive=false&isSmbAutoCall=false&needSmbHouyi=false&gclid=CjwKCAjw9e6SBhB2EiwA5myr9lDn-l7Cc0d-ZZthDS5AllMazInuy8N0gE1bVoHqNVrY7rCMft53OxoCXOUQAvD_BwE&gclsrc=aw.ds"},
]

export const PRODUCTOS:Product[]=[
    {id:0,name:"REEBOK Cortavientos Classics Vector",precio_promedio:20,minimo_historico:12},
    {id:1,name:"adidas Runfalcon 2.0 Unisexr",precio_promedio:26,minimo_historico:21},
    {id:2,name:"Redmi note 10 5G",precio_promedio:180,minimo_historico:149},
    {id:3,name:"Apple MacBook Pro (2020) Retina, Chip M1 de Apple, 8 GB, 256 GB SSD",precio_promedio:1600,minimo_historico:1019},
    {id:4,name:"Nintendo Switch Assassin's Creed The Rebel Collection",precio_promedio:25,minimo_historico:20},
    {id:5,name:"Chaqueta de montaña 'M Inner Limits II Jacket' COLUMBIA en Gris Oscuro, Negro",precio_promedio:87,minimo_historico:49.93},
    {id:6,name:"Corsair Vengeance LPX DDR4 3200 PC4-25600 16GB 2X8GB CL16 Negro",precio_promedio:98.87,minimo_historico:67.77},
    {id:7,name:"TV LED 55 - Xiaomi TV P1E, UHD 4K, Quad A55 1.5 GHz, Smart TV, 20 W, Dolby Audio, DTS-HD, Negro",precio_promedio:450,minimo_historico:399},
 ];