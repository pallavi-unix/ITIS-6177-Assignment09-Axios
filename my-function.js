// The below code is deployed over aws service

export const handler = async (say) => {
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Pallavi Deshmukh says '+ say.keyword),
    };
    return response;
};
