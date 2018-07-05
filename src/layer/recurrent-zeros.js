import Zeros2D from '../utilities/zeros-2d'
import { Internal } from './types'

export default class RecurrentZeros extends Internal {
  setDimensions(width, height) {
    this.praxis = null
    this.width = width
    this.height = height
    this.weights = new Zeros2D(width, height)
    this.deltas = new Zeros2D(width, height)
  }

  setupKernels() {
    throw new Error(
      `${this.constructor.name}-setupKernels is not yet implemented`
    )
  }

  reuseKernels() {
    throw new Error(
      `${this.constructor.name}-reuseKernels is not yet implemented`
    )
  }

  predict() {
    throw new Error(`${this.constructor.name}-predict is not yet implemented`)
  }

  compare() {
    throw new Error(`${this.constructor.name}-compare is not yet implemented`)
  }

  learn(previousLayer, nextLayer, learningRate) {
    this.weights = this.praxis.run(this, previousLayer, nextLayer, learningRate)
    this.deltas = Zeros2D(this.width, this.height)
  }

  validate() {
    throw new Error(`${this.constructor.name}-validate is not yet implemented`)
  }

  reset() {
    throw new Error(`${this.constructor.name}-reset is not yet implemented`)
  }
}