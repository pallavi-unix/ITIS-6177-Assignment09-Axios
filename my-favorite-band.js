// The below code is deployed over aws service

export const handler = async (favorite) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Pallavi Deshmukh favorite band is '+ favorite.keyword),
    };
    return response;
};
