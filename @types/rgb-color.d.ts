interface RgbColor{
/**Returns the color as a CSS-style 7 character hexadecimal string (#rrggbb) or 9 character
hexadecimal string (#aarrggbb).
@return The hex representation of color.*/asHexString():string;
/**The blue channel of this color, as a number from 0 to 255.
@return The value of blue channel.*/getBlue():Integer;
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;
/**The green channel of this color, as a number from 0 to 255.
@return The value of green channel.*/getGreen():Integer;
/**The red channel of this color, as a number from 0 to 255.
@return The value of red channel.*/getRed():Integer;}