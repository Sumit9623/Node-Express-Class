
//  For MongoDB follow it's Documentaion

// CRUD Operations

// 1) Insert --->
    //    insertOne()
    //    insertMany()

    //   Update with upsert : true

//  2) Read
    //  find()
    //  findOne()

    //  Quering Data --> filtering Data with conditions
        // Comparison
            // $eq: Values are equal
            // $ne: Values are not equal
            // $gt: Value is greater than another value
            // $gte: Value is greater than or equal to another value
            // $lt: Value is less than another value
            // $lte: Value is less than or equal to another value
            // $in: Value is matched within an array

        // Logical
            // $and: Returns documents where both queries match
            // $or: Returns documents where either query matches
            // $nor: Returns documents where both queries fail to match
            // $not: Returns documents where the query does not match

        // Evalution
            // $regex: Allows the use of regular expressions when evaluating field values
            // $text: Performs a text search
            // $where: Uses a JavaScript expression to match documents

    //  Projection   --> selection only require fields
                    //   we can decide which fields to show and which to hide

//  3) Update -> updating existing data
    //  upadateOne()
    //  updateMany()

    // Syntax:
    //   update(filter,update,options);

        // $currentDate: Sets the field value to the current date
        // $inc: Increments the field value
        // $rename: Renames the field
        // $set: Sets the value of a field
        // $unset: Removes the field from the document

        //  for array update
        // $addToSet: Adds distinct elements to an array
        // $pop: Removes the first or last element of an array
        // $pull: Removes all elements from an array that match the query
        // $push: Adds an element to an array

//  4) Delete --> deleting Documents
   // deleteOne()
   // deleteMany()


//  aggregations  -->

    // $match: Filters documents based on specified criteria.
    // $group: Groups documents together based on a field and performs calculations on those groups.
    // $project: Reshapes documents to include or exclude specific fields.
    // $sort: Sorts the documents based on one or more fields.
    // $limit: Limits the number of documents in the result.
    // $lookup: Performs left outer joins between collections.
    // $addFields: Adds new fields to documents.
    // $unwind: Breaks apart arrays within documents to create separate documents.
    // $replaceRoot: Replaces the current document with another document.
