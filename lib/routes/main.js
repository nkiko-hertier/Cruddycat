import { Router } from "express";
import { Controller } from "../schema/controller.js";

class router {
  constructor(schema) {
    this.schema = schema;
  }
  router() {
    const router = Router();
    const api = new Controller(this.schema);

    router.post('/:model', api.create());
    router.get('/:model', api.read());
    router.get('/:model/:id', api.readOne());
    router.put('/:model/:id', api.update());
    router.delete('/:model/:id', api.delete());

    return router;
  }
}

export default router;
