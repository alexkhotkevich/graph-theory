import { IMatrix } from '.'

export class Matrix extends Array<Array<number>> implements IMatrix {
  size: IMatrix['size']
  constructor(matrix: IMatrix) {
    super(...matrix)
    this.size = [matrix.length || 0, matrix[0]?.length || 0]

    console.log(this)
  }
  transpose() {
    //На входе двумерный массив
    let [m, n] = this.size!,
      AT = new Matrix([])

    for (let i = 0; i < n; i++) {
      AT[i] = []
      for (let j = 0; j < m; j++) {
        AT[i][j] = this[j][i]
      }
    }
    return AT
  }
}
