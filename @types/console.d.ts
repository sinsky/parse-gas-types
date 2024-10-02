interface console{
/**Outputs a blank ERROR level message to Stackdriver Logging.*/error():void;
/**Outputs an ERROR level message to Stackdriver Logging.
@param formatOrObject a string containing zero or more substitution strings, or a JavaScript
    object to be logged as a JavaScript object if no other parameters.
@param values objects with which to replace substitution strings within the message. This gives
    you additional control over the format of the output.*/error(formatOrObject:Object,...values:Object[]):void;
/**Outputs blank INFO level message to Stackdriver Logging.*/info():void;
/**Outputs an INFO level message to Stackdriver Logging.
@param formatOrObject a string containing zero or more substitution strings, or a JavaScript
    object to be logged as a JavaScript object if no other parameters.
@param values objects with which to replace substitution strings within the message. This gives
    you additional control over the format of the output.*/info(formatOrObject:Object,...values:Object[]):void;
/**Outputs a blank DEBUG level message to Stackdriver Logging.*/log():void;
/**Outputs a DEBUG level message to Stackdriver Logging.
@param formatOrObject a string containing zero or more substitution strings, or a JavaScript
    object to be logged as a JavaScript object if no other parameters.
@param values objects with which to replace substitution strings within the message. This gives
    you additional control over the format of the output.*/log(formatOrObject:Object,...values:Object[]):void;
/**Starts a timer you can use to track how long an operation takes.
@param label The name to give the new timer.*/time(label:string):void;
/**Stops a timer that was previously started by calling `console.time()`. The time duration
is logged in Stackdriver.
@param label the name of the timer to stop.*/timeEnd(label:string):void;
/**Outputs a blank WARNING level message to Stackdriver Logging.*/warn():void;
/**Outputs a WARNING level message to Stackdriver Logging.
@param formatOrObject a string containing zero or more substitution strings, or a JavaScript
    object to be logged as a JavaScript object if no other parameters.
@param values objects with which to replace substitution strings within the message. This gives
    you additional control over the format of the output.*/warn(formatOrObject:Object,...values:Object[]):void;}const console:console;