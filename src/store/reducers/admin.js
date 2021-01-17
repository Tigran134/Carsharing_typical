const initialState = {
  yandexDrive:'11',
    delimobil:'22',
    belkaCar:'33',
    youDrive:'44',
    rentmee:'55',
    bibi:'66'
}

export default function adminReducer(state = initialState, action ) {
  switch (action.type){
 case 'CHANGEYANDEX':

   return {...state, yandexDrive: action.payload}
   case 'CHANGEDELI':
   
    return {...state, delimobil: action.payload}

    default:
      return state
  }
  

}
