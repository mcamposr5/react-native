import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
  children: string;
  // El color del botón se puede definir como "primary", "secondary" o "tertiary". Si no se especifica, el botón tendrá un color por defecto primary.
  color?: "primary" | "secondary" | "tertiary";

  // Agregar una variante a nuestro botón para que pueda ser utilizado como un botón de texto, sin fondo ni bordes.
  variant?: "contained" | "text-only";
  classname?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      variant = "contained",
      onPress,
      onLongPress,
      className,
    }: Props,
    ref: React.Ref<View>,
  ) => {
    // Al obtener el color, vamos a leer la clase btnColor para asignar el color de fondo al botón.
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color]; // Obtenemos la clase de color correspondiente al color recibido como prop.

    const textColor = {
      primary: "text-white",
      secondary: "text-white",
      tertiary: "text-white",
    }[color];

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  },
);

// Asignamos un displayName a nuestro componente para facilitar su identificación en las herramientas de desarrollo.
CustomButton.displayName = "CustomButton";

export default CustomButton;
