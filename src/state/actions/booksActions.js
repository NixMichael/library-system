export const firstAction = (data) => async(dispatch) => {
    dispatch({
        type: 'DO_IT',
        payload: data
    })
}