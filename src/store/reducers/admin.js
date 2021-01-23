const initialState = {
  yandexDrive:"Скопировать",
    delimobil:"Скопировать",
    belkaCar:"Скопировать",
    youDrive:"Скопировать",
    rentmee:"Скопировать",
    bibi:"Скопировать",
    sber:"Скопировать",
    siti:"Скопировать" 
}

export default function adminReducer(state = initialState, action ) {
  switch (action.type){
 
    case 'CHANGEYANDEX' :
return {...state, yandexDrive:'Скопировано ✓', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировать" };


case 'CHANGEDELI':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировано ✓",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировать" };


case 'CHANGEBELKA':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировано ✓", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировать" };

case 'CHANGEYOU':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировано ✓", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировать" };
    
case 'CHANGERENT':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировано ✓", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировать" };

case 'CHANGEBIBI':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировано ✓",siti:"Скопировать",sber:"Скопировать" };

case 'CHANGESITI':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировано ✓",sber:"Скопировать" };

case 'CHANGESBER':   
return {...state, yandexDrive:'Скопировать', delimobil:"Скопировать",  belkaCar:"Скопировать", youDrive:"Скопировать", rentmee:"Скопировать", bibi:"Скопировать",siti:"Скопировать",sber:"Скопировано ✓" };



    default:
      return state
  }
}
