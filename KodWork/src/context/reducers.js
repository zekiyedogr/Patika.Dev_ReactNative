export default function (state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };

        case 'ADD_FAVORITE':
            return { ...state, favoriteList: [...state.favoriteList, action.payload.favorite] };

        case 'DELETE_FAVORITE':
            return {
                ...state,
                favoriteList: state.favoriteList.filter(favorite => favorite.id !== action.payload.id)
            };

        case 'ADD_COMPANY_FAVORITE':
            return { ...state, favoriteCompanyList: [...state.favoriteCompanyList, action.payload.favoriteCompany] };

        case 'DELETE_COMPANY_FAVORITE':
            return {
                ...state,
                favoriteCompanyList: state.favoriteCompanyList.filter(company => company.id !== action.payload.id)
            };

        default:
            return state;
    }
}
