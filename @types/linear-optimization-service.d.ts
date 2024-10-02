interface LinearOptimizationService{
/**Status of the solver.*/Status:LinearOptimizationService._Status;
/**Type of variables created by the solver.*/VariableType:LinearOptimizationService._VariableType;
/**Creates an engine to to solve linear programs (potentially mixed-integer programs).

```
// Creates a linear optimization engine.
var engine = LinearOptimizationService.createEngine();
engine.addVariable('x', 0, 10);

// ...
```
@return a linear optimization engine*/createEngine():LinearOptimizationService.LinearOptimizationEngine;}module LinearOptimizationService{interface VariableType{}interface _VariableType{
/**Type of variable that can take any real value.*/CONTINUOUS:VariableType;
/**Type of variable that can only take integer values.*/INTEGER:VariableType;}interface Status{}interface _Status{
/**Status when it failed to find a solution for unexpected reasons.*/ABNORMAL:Status;
/**Status when a feasible (not necessarily optimal) solution has been found.*/FEASIBLE:Status;
/**Status when the current model is unfeasible (has no solution).*/INFEASIBLE:Status;
/**Status when the model is invalid.*/MODEL_INVALID:Status;
/**Status when [`LinearOptimizationEngine.solve()`](https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()) has not been called yet.*/NOT_SOLVED:Status;
/**Status when an optimal solution has been found.*/OPTIMAL:Status;
/**Status when the current model is unbound.*/UNBOUNDED:Status;}interface LinearOptimizationSolution{
/**Gets the value of the objective function in the current solution.

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve();
Logger.log('ObjectiveValue: ' + solution.getObjectiveValue());
```
@return the value of the objective function*/getObjectiveValue():number;
/**Gets the status of the solution. Before solving a problem, the status will be `NOT_SOLVED`.

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve();
if (solution.getStatus() != LinearOptimizationService.Status.FEASIBLE &&
    solution.getStatus() != LinearOptimizationService.Status.OPTIMAL) {
  throw 'No solution ' + status;
}
Logger.log('Status: ' + solution.getStatus());
```
@return the status of the solver*/getStatus():LinearOptimizationService.Status;
/**Gets the value of a variable in the solution created by the last call to [`LinearOptimizationEngine.solve()`](https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()).

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve();
Logger.log('Value of x: ' + solution.getVariableValue('x'));
```
@param variableName name of the variable
@return the value of the variable in the solution*/getVariableValue(variableName:string):number;
/**Determines whether the solution is either feasible or optimal.

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve();
if (!solution.isValid()) {
  throw 'No solution ' + status;
}
```
@return `true` if the solution is valid ([`Status.FEASIBLE`](https://developers.google.com/apps-script/reference/optimization/status.html#FEASIBLE) or
    [`Status.OPTIMAL`](https://developers.google.com/apps-script/reference/optimization/status.html#OPTIMAL)); `false` if not*/isValid():boolean;}interface LinearOptimizationEngine{
/**Adds a new linear constraint in the model. The upper and lower bound of the constraint are
defined at creation time. Coefficients for the variables are defined via calls to [`LinearOptimizationConstraint.setCoefficient(variableName, coefficient)`](https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint.html#setCoefficient(String,Number)).

```
var engine = LinearOptimizationService.createEngine();

// Create a linear constraint with the bounds 0 and 10
var constraint = engine.addConstraint(0, 10);

// Create a variable so we can add it to the constraint
engine.addVariable('x', 0, 5);

// Set the coefficient of the variable in the constraint. The constraint is now:
// 0 <= 2 * x <= 5
constraint.setCoefficient('x', 2);
```
@param lowerBound lower bound of the constraint
@param upperBound upper bound of the constraint
@return the constraint created*/addConstraint(lowerBound:number,upperBound:number):LinearOptimizationService.LinearOptimizationConstraint;
/**Adds constraints in batch to the model.

```
var engine = LinearOptimizationService.createEngine();

// Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >= 0 and <= 100)
variable 'y'.
engine.addVariables(['x', 'y'], [0, 0], [1, 100],
    [LinearOptimizationService.VariableType.INTEGER,
        LinearOptimizationService.VariableType.CONTINUOUS]);

// Adds two constraints:
//   0 <= x + y <= 3
//   1 <= 10 * x - y <= 5
engine.addConstraints([0.0, 1.0], [3.0, 5.0], [['x', 'y'], ['x', 'y']], [[1, 1], [10, -1]]);
```
@param lowerBounds lower bounds of the constraints
@param upperBounds upper bounds of the constraints
@param variableNames the names of variables for which the coefficients are being set
@param coefficients coefficients being set
@return a linear optimization engine*/addConstraints(lowerBounds:number[],upperBounds:number[],variableNames:string[][],coefficients:number[][]):LinearOptimizationService.LinearOptimizationEngine;
/**Adds a new continuous variable to the model. The variable is referenced by its name. The type
is set to [`VariableType.CONTINUOUS`](https://developers.google.com/apps-script/reference/optimization/variable-type.html#CONTINUOUS).

```
var engine = LinearOptimizationService.createEngine();
var constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);
```
@param name unique name of the variable
@param lowerBound lower bound of the variable
@param upperBound upper bound of the variable
@return a linear optimization engine*/addVariable(name:string,lowerBound:number,upperBound:number):LinearOptimizationService.LinearOptimizationEngine;
/**Adds a new variable to the model. The variable is referenced by its name.

```
var engine = LinearOptimizationService.createEngine();
var constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER);

// Add a real (continuous) variable
engine.addVariable('y', 0, 100, LinearOptimizationService.VariableType.CONTINUOUS);
```
@param name unique name of the variable
@param lowerBound lower bound of the variable
@param upperBound upper bound of the variable
@param type type of the variable, can be one of [`VariableType`](https://developers.google.com/apps-script/reference/optimization/variable-type.html)
@return a linear optimization engine*/addVariable(name:string,lowerBound:number,upperBound:number,type:LinearOptimizationService.VariableType):LinearOptimizationService.LinearOptimizationEngine;
/**Adds a new variable to the model. The variable is referenced by its name.

```
var engine = LinearOptimizationService.createEngine();
var constraint = engine.addConstraint(0, 10);

// Add a boolean variable (integer >= 0 and <= 1)
engine.addVariable('x', 0, 1, LinearOptimizationService.VariableType.INTEGER, 2);
// The objective is now 2 * x.

// Add a real (continuous) variable
engine.addVariable('y', 0, 100, LinearOptimizationService.VariableType.CONTINUOUS, -5);
// The objective is now 2 * x - 5 * y.
```
@param name unique name of the variable
@param lowerBound lower bound of the variable
@param upperBound upper bound of the variable
@param type type of the variable, can be one of [`VariableType`](https://developers.google.com/apps-script/reference/optimization/variable-type.html)
@param objectiveCoefficient objective coefficient of the variable
@return a linear optimization engine*/addVariable(name:string,lowerBound:number,upperBound:number,type:LinearOptimizationService.VariableType,objectiveCoefficient:number):LinearOptimizationService.LinearOptimizationEngine;
/**Adds variables in batch to the model. The variables are referenced by their names.

```
var engine = LinearOptimizationService.createEngine();

// Add a boolean variable 'x' (integer >= 0 and <= 1) and a real (continuous >=0 and <= 100)
// variable 'y'.
engine.addVariables(['x', 'y'], [0, 0], [1, 100],
    [LinearOptimizationService.VariableType.INTEGER,
        LinearOptimizationService.VariableType.CONTINUOUS]);
```
@param names unique names of the variables
@param lowerBounds lower bounds of the variables
@param upperBounds upper bounds of the variables
@param types types of the variables, can be one of [`VariableType`](https://developers.google.com/apps-script/reference/optimization/variable-type.html)
@param objectiveCoefficients objective coefficients of the variables
@return a linear optimization engine*/addVariables(names:string[],lowerBounds:number[],upperBounds:number[],types:LinearOptimizationService.VariableType[],objectiveCoefficients:number[]):LinearOptimizationService.LinearOptimizationEngine;
/**Sets the optimization direction to maximizing the linear objective function.

```
var engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);

// We want to maximize.
engine.setMaximization();
```
@return a linear optimization engine*/setMaximization():LinearOptimizationService.LinearOptimizationEngine;
/**Sets the optimization direction to minimizing the linear objective function.

```
var engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);

// We want to minimize
engine.setMinimization();
```
@return a linear optimization engine*/setMinimization():LinearOptimizationService.LinearOptimizationEngine;
/**Sets the coefficient of a variable in the linear objective function.

```
var engine = LinearOptimizationService.createEngine();

// Add a real (continuous) variable. Notice the lack of type specification.
engine.addVariable('y', 0, 100);

// Set the coefficient of 'y' in the objective.
// The objective is now 5 * y
engine.setObjectiveCoefficient('y', 5);
```
@param variableName name of variable for which the coefficient is being set
@param coefficient coefficient of the variable in the objective function
@return a linear optimization engine*/setObjectiveCoefficient(variableName:string,coefficient:number):LinearOptimizationService.LinearOptimizationEngine;
/**Solves the current linear program with the default deadline of 30 seconds. Returns the solution found.

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve();
if (!solution.isValid()) {
  throw 'No solution ' + solution.getStatus();
}
Logger.log('Value of x: ' + solution.getVariableValue('x'));
```
@return solution of the optimization*/solve():LinearOptimizationService.LinearOptimizationSolution;
/**Solves the current linear program. Returns the solution found. and if it is an optimal
solution.

```
var engine = LinearOptimizationService.createEngine();

// Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
engine.addVariable('x', 0, 10);

// ...

// Solve the linear program
var solution = engine.solve(300);
if (!solution.isValid()) {
  throw 'No solution ' + solution.getStatus();
}
Logger.log('Value of x: ' + solution.getVariableValue('x'));
```
@param seconds deadline for solving the problem, in seconds; the maximum deadline is 300 seconds
@return solution of the optimization*/solve(seconds:number):LinearOptimizationService.LinearOptimizationSolution;}interface LinearOptimizationConstraint{
/**Sets the coefficient of a variable in the constraint. By default, variables have a coefficient
of 0.

```
var engine = LinearOptimizationService.createEngine();
// Create a linear constraint with the bounds 0 and 10
var constraint = engine.addConstraint(0, 10);
// Create a variable so we can add it to the constraint
engine.addVariable('x', 0, 5);
// Set the coefficient of the variable in the constraint. The constraint is now:
// 0 <= 2 * x <= 5
constraint.setCoefficient('x', 2);
```
@param variableName the name of variable for which the coefficient is being set
@param coefficient coefficient being set
@return this linear optimization constraint*/setCoefficient(variableName:string,coefficient:number):LinearOptimizationService.LinearOptimizationConstraint;}}const LinearOptimizationService:LinearOptimizationService;