import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Line from "./Line";
const Diagram = ({ progress }) => {
  if (!progress) return null;

  // TEXT COLORS
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryColor = useTransform(
    progress,
    [0.05, 0.15, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineColor = useTransform(
    progress,
    [0.25, 0.35, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designColor = useTransform(
    progress,
    [0.45, 0.55, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentColor = useTransform(
    progress,
    [0.65, 0.75, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentColor = useTransform(
    progress,
    [0.85, 0.95, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );

  // LINE SEQUENCES (left then right)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryLeft = useTransform(progress, [0.0, 0.075], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryRight = useTransform(progress, [0.075, 0.15], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineLeft = useTransform(progress, [0.2, 0.275], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineRight = useTransform(progress, [0.275, 0.35], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designLeft = useTransform(progress, [0.4, 0.475], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designRight = useTransform(progress, [0.475, 0.55], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentLeft = useTransform(progress, [0.6, 0.675], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentRight = useTransform(progress, [0.675, 0.75], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentLeft = useTransform(progress, [0.8, 0.875], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentRight = useTransform(progress, [0.875, 0.95], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryRotate = useTransform(
    [discoveryLeft, discoveryRight],
    ([l, r]) => (l + r) * 45,
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineRotate = useTransform(
    [defineLeft, defineRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designRotate = useTransform(
    [designLeft, designRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentRotate = useTransform(
    [developmentLeft, developmentRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentRotate = useTransform(
    [deploymentLeft, deploymentRight],
    ([l, r]) => (l + r) * 45,
  );
  return (
    <div className="w-full flex h-2/3 border-t border-white/5 p-4 gap-4 flex-col">
      {/* TOP VISUAL */}
      <div className="w-full xl:h-[200px] flex items-center justify-center overflow-hidden bg-black rounded-sm xl:opacity-30 opacity-50">
        <div className="w-full h-full flex items-end  opacity-50">
          <motion.div
            style={{ rotate: discoveryRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/discovery.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-full h-full opacity-50">
          <motion.div
            style={{ rotate: defineRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/define.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-full h-full opacity-50 flex items-end">
          <motion.div
            style={{ rotate: designRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/designing.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* TOP ROW */}
      <div className="flex items-center w-full justify-center">
        <div className="flex items-center w-full">
          <Line fill={discoveryLeft} />
          <motion.p
            style={{ color: discoveryColor }}
            className="px-1 uppercase"
          >
            [Discovery]
          </motion.p>
          <Line fill={discoveryRight} />
        </div>

        <div className="flex items-center w-full">
          <Line fill={defineLeft} />
          <motion.p style={{ color: defineColor }} className="px-1 uppercase">
            [Define]
          </motion.p>
          <Line fill={defineRight} />
        </div>

        <div className="flex items-center w-full">
          <Line fill={designLeft} />
          <motion.p style={{ color: designColor }} className="px-1 uppercase">
            [Design]
          </motion.p>
          <Line fill={designRight} />
        </div>
      </div>

      {/* CONNECTOR */}
      <div className="flex flex-col items-center">
        <div className="h-5 xl:w-1/4 w-1/2 border-b border-r border-orange-600 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
        <div className="h-5 xl:w-1/4 w-1/2 border-t border-l border-orange-600 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
      </div>

      {/* BOTTOM VISUAL */}
      <div className="w-full xl:h-[200px] flex items-center justify-around overflow-hidden bg-black rounded-sm xl:opacity-30 opacity-50">
        <div className="w-1/3 h-full opacity-50 flex items-center">
          <motion.div
            style={{ rotate: developmentRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/designing.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-1/3 h-full opacity-50 flex items-center">
          <motion.div
            style={{ rotate: deploymentRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/define.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex items-center w-full justify-center">
        <div className="flex items-center w-full">
          <Line fill={developmentLeft} />
          <motion.p
            style={{ color: developmentColor }}
            className="px-1 uppercase"
          >
            [Development]
          </motion.p>
          <Line fill={developmentRight} />
        </div>
        <div className="flex items-center w-full">
          <Line fill={deploymentLeft} />
          <motion.p
            style={{ color: deploymentColor }}
            className="px-1 uppercase"
          >
            [Deployment]
          </motion.p>
          <Line fill={deploymentRight} />
        </div>
      </div>
    </div>
  );
};

export default Diagram;
