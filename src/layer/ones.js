import ones2D from '../utilities/ones-2d'
import Zeros2D from '../utilities/zeros-2d'
import { Model } from './types'

export default class Ones extends Model {
  constructor(settings) {
    super(settings)
    this.validate()
    this.weights = ones2D(this.width, this.height)
    this.deltas = Zeros2D(this.width, this.height)
  }
}