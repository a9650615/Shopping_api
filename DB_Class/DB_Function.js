export default class DB_Function {
  _model;

  async findOne(where = {}, option = {}) {
    return await this._model.findOne(Object.assign({ where }, option));
  }

  async findAll(where = {}, option = {}) {
    return await this._model.findAll(Object.assign({ where }, option));
  }

  async insert(value = {}, option = {}) {
    return await this._model.create(value);
  }

  async delete(where = {}, option = {}) {
    return await this._model.destroy({ where });
  }

  async update(where = {}, value = {}, option = {}) {
    return await this._model.update(value, { where });
  }
}