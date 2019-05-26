var File = require('File.js')

class FormulaFile extends File{
  constructor(){
    super();
    this._latexStringList = new Array();
    this._type = 'FormulaFile'
  }
  add(LatexString){
    _latexStringList.push(LatexString)
  }
  get latexStringList(){
    return _latexStringList;
  }

}

module.exports = FormulaFile