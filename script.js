const BUY_PHONE ='BUY_PHONE';
const BUY_TAB ='BUY_TAB';
const BUY_TV ='BUY_TV';
function buyTv()
{
    return {
        type : BUY_TV
    }
}
function buyPhone()
{
    return {
        type : BUY_PHONE
    }
}
function buyTab()
{
    return {
        type : BUY_TAB
    }
}
///
const inititialStatePhones ={
    phones:5 ,
    tab:7

}
const inititialStateTv ={
   
    tv:17
}
///reducer
const phonesReducer =(state=inititialStatePhones,action)=>
{ 
    switch(action.type)
    {
        case BUY_PHONE:
        return{
                ...state,
                phones:state.phones -1
            }
        case BUY_TAB:

                return{
                    ...state,
                    tab:state.tab -1
                }    
     
            default : return state
    }
    console.log(state)
}
const tvReducer =(state=inititialStateTv,action)=>
{ 
    switch(action.type)
    {
        case BUY_TV:
            return{
                ...state,
                tv:state.tv -1
            }

            default : return state
    }
}
//////combine reducers
const rootReducer=Redux.combineReducers({
    phone:phonesReducer,
    tv:tvReducer
})
//////store redux
const store =Redux.createStore(rootReducer)
/////
const availablePhones =document.getElementById('count');
const availableTab =document.getElementById('count-tab');
const availableTv =document.getElementById('count-tv');
/////getstate
availablePhones.innerHTML=store.getState().phone.phones;
availableTab.innerHTML=store.getState().phone.tab;
availableTv.innerHTML=store.getState().tv.tv;
//dispatch
document.getElementById('buy-phone').addEventListener('click' , function(){
    store.dispatch(buyPhone())

})
document.getElementById('buy-tab').addEventListener('click' , function(){
    store.dispatch(buyTab())

})
document.getElementById('buy-tv').addEventListener('click' , function(){
    store.dispatch(buyTv())

})
///listener
store.subscribe(()=>
{
    availablePhones.innerHTML=store.getState().phone.phones;
    availableTab.innerHTML=store.getState().phone.tab;
    availableTv.innerHTML=store.getState().tv.tv;
})

