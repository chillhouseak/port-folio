const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = process.env.PORT||3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// MongoDB Setup
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://portfolio-my:port12345@cluster0.ro6ip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("portfolio");
    const projectsCollection = db.collection("projects");
    const messagesCollection = db.collection("messages");

    // ✅ Add Project
    app.post("/upload-project", async (req, res) => {
      const data = req.body;
      const result = await projectsCollection.insertOne(data);
      res.send(result);
    });

    // ✅ Get All Projects (optionally filter by techStack)
    app.get("/projects", async (req, res) => {
      let query = {};
      if (req.query?.techStack) {
        query = { techStack: req.query.techStack };
      }
      const result = await projectsCollection.find(query).toArray();
      res.send(result);
    });

    // ✅ Get Single Project
    app.get("/project/:id", async (req, res) => {
      const id = req.params.id;
      const result = await projectsCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // ✅ Update Project
    app.patch("/project/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await projectsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData },
        { upsert: true }
      );
      res.send(result);
    });

    // ✅ Delete Project
    app.delete("/project/:id", async (req, res) => {
      const id = req.params.id;
      const result = await projectsCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

   
   

    // ✅ Get All Messages (admin use)
    app.get("/messages", async (req, res) => {
      const result = await messagesCollection.find().toArray();
      res.send(result);
    });
    
   // ✅ Submit Contact Message (enhanced with validation and response)
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const contactData = { name, email, subject, message, createdAt: new Date() };
    const result = await messagesCollection.insertOne(contactData);

    console.log("📬 New contact message:", contactData);
    return res.status(200).json({ message: "Message received successfully!" });
  } catch (err) {
    console.error("❌ Failed to insert contact message:", err);
    return res.status(500).json({ message: "Failed to send message. Try again later." });
  }
});


  

    console.log("MongoDB Connected Successfully ✅");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

// Start Server
app.get('/', (req, res) => {
  res.send('Portfolio API is running 🚀');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
