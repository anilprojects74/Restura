import { motion } from "framer-motion"

const DishCard = ({ project }) => {

  const containerVariants = {
    hidden: { opacity: 0},
    show:{
      opacity: 1,
      transition: {
        staggerChildren: 1,
      }
    }
  }
  
  const ItemVariants = {
    hidden: { opacity: 0, y:30 },
    show: { opacity: 1, y: 0, transition:{ duration: 1}}
  }

  return (
    <motion.div
     initial="hidden"
     whileInView="show"
     viewport={{ once: true}}
     variants={containerVariants}
    >
        <motion.img
        initial="hidden"
        whileInView="show"
        variants={ItemVariants} 
        viewport={{ once: true}}
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2" />
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={ItemVariants} 
        viewport={{ once: true}}
        className="p-4"
        >
            <h3 className="mb-2 text-2xl font-bold  tracking-tighter">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
        </motion.div>
    </motion.div>
  )
}

export default DishCard