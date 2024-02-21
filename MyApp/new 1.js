const { MongoClient } = require('mongodb');
async function connectToDatabase()
{
	const url = 'mongodb://127.0.0.1:27017/';
	
	const client = new MongoClient(url);
	await client.connect();
		
	const dbName = "qa_database";
	const collectionName = "qa_collection";
	lonsole.log('Successfully connected to MongoDB');	
		
	const database = client.db(dbName);
	const collection = database.collection(collectionName);
	//perform database operations here
	
		//insertOne
		try
		{
			await collection.insertOne({ regno: '2019ict37', name: 'Sarani', degree: 'ICT', age: 22, gender: 'F', gpa: 3.19, city: 'Gampaha'});
			//collection.insert({ question: 'q7?', answer: 'ans7'});
		}
		catch (error)
		{
			console.error('Error connecting to MongoDB:',error);
		}
		
		//insertMany
		try
		{
			await collection.insertOne([{regno: '2019csc03', name: 'kamal', degree: 'CSC', age: 20, gender: 'M', gpa: 4, city: 'Kandy'},
				{regno: '2019ict111', name: 'Nimal', degree: 'ICT', age: 24, gender: 'M', gpa: 2.5, city: 'Vavuniya'},
				{regno: '2019amc111', name: 'kamala', degree: 'AMC', age: 21, gender: 'F', gpa: 3.5, city: 'Anuradhapura'}]);
		}
		
		//updateOne
		try
		{
			await collection.updateOne({regno: '2019ict111'}, {$set:{name: 'John Kennady', age: 25}});
			console.log('Successfully Updated');
		}
		catch (error)
		{
			console.error('Error in Updating!',error);
		}
		
		//updateMany
		try
		{
			await collection.updateMany({degree: 'ICT'},{$set: {'Jaffna'}});
			console.log('Successfully updated all computer science students city');
		}
		catch (error)
		{
			console.error('Error in Updating!',error);
		}
		
		//Delete one
		try
		{
			await collection.deleteOne({regno: '2019csc03'});
			console.log('Successfully deleted');
		}
		catch (error)
		{
			console.error('Error in deleting',error);
		}
		
		//deleteMany
		try
		{
			await collection.deleteMany();
			console.log('Successfully deleted all students');
		}
		catch(error)
		{
			console.log('Error in deleting',error);
		}
		
		//readOne
		try
		{
			await collection.find({regno: '2019ict111'}.toArray().then(outputdata)=>{console.log(outputdata)});
		}
		catch (error)
		{
			console.error('Error in reading',error);
		}
		await client.close();
		//console.log('Disconnect from MongoDB');
}
connectToDatabase();