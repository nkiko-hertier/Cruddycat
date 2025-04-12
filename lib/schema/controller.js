export class Controller {
  constructor(schema) {
    this.schema = schema;
  }

  create() {
    return async (req, res) => {
      const model = this.schema[req.params.model];
      if (!model) return res.status(400).send("Invalid model");

      try {
        const item = new model(req.body);
        const saved = await item.save();
        res.status(201).json(saved);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
  }

  read() {
    return async (req, res) => {
      const model = this.schema[req.params.model];
      if (!model) return res.status(400).send("Invalid model");

      try {
        const items = await model.find(req.query);
        res.status(200).json(items);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
  }

  readOne() {
    return async (req, res) => {
      const model = this.schema[req.params.model];
      if (!model) return res.status(400).send("Invalid model");

      try {
        const item = await model.findById(req.params.id);
        if (!item) return res.status(404).send("Not found");
        res.status(200).json(item);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
  }

  update() {
    return async (req, res) => {
      const model = this.schema[req.params.model];
      if (!model) return res.status(400).send("Invalid model");

      try {
        const updated = await model.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updated) return res.status(404).send("Not found");
        res.status(200).json(updated);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
  }

  delete() {
    return async (req, res) => {
      const model = this.schema[req.params.model];
      if (!model) return res.status(400).send("Invalid model");

      try {
        const deleted = await model.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).send("Not found");
        res.status(200).json(deleted);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
  }
}
