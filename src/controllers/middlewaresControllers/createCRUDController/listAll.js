/*const listAll = async (Model, req, res) => {
  const sort = parseInt(req.query.sort) || 'desc';

  //  Query the database for a list of all results
  const result = await Model.find({ removed: false }).sort({ created: sort }).populate().exec();

  if (result.length > 0) {
    return res.status(200).json({
      success: true,
      result,
      message: 'Successfully found all documents',
    });
  } else {
    return res.status(203).json({
      success: false,
      result: [],
      message: 'Collection is Empty',
    });
  }
};

module.exports = listAll;
*/

/*const listAll = async (Model, req, res) => {
  const sort = parseInt(req.query.sort) || 'desc';

  try {
    // Query the database for a list of all results
    const result = await Model.find({ removed: false }).sort({ created: sort }).populate().exec();

    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        result,
        message: 'Successfully found all documents',
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],
        message: 'Collection is Empty',
      });
    }
  } catch (error) {
    // Return the error itself
    return res.status(500).json({
      success: false,
      result: [],
      error: error.message, // Include the error message in the response
    });
  }
};

module.exports = listAll;
*/

const listAll = async (Model, req, res) => {
  const sort = parseInt(req.query.sort) || 'desc';

  try {
    // Intentionally throw an error for testing purposes
    throw new Error('Test error');

    // Uncomment the line below to use the actual database query
    // const result = await Model.find({ removed: false }).sort({ created: sort }).populate().exec();

    // Rest of the code...
  } catch (error) {
    // Return the error itself
    return res.status(500).json({
      success: false,
      result: [],
      error: error.message, // Include the error message in the response
    });
  }
};

module.exports = listAll;
