import { getProjectById } from '@/lib/projects';
import { ProjectGallery } from '@/components/project-gallery';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.slug);

  if (!project) {
    notFound();
  }

  const categoryColors = {
    web: 'bg-blue-100 text-blue-800',
    mobile: 'bg-green-100 text-green-800',
    fullstack: 'bg-purple-100 text-purple-800',
    frontend: 'bg-orange-100 text-orange-800',
    backend: 'bg-gray-100 text-gray-800'
  };

  const statusColors = {
    completed: 'bg-emerald-100 text-emerald-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="hover:bg-white/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={categoryColors[project.category]} variant="secondary">
                  {project.category}
                </Badge>
                {/* <Badge className={statusColors[project.status]} variant="secondary">
                  {project.status}
                </Badge> */}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Döredilen senesi: {new Date(project.createdDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Gerek bolan wagt: {project.duration}</span>
                </div>
              </div>

              <div className="flex gap-3">
                {/* {project.demoUrl && (
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )} */}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      github
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:w-80">
              <img
                src={project.screenshots[0]?.url}
                alt={project.screenshots[0]?.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Screenshots */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Screenshot-lar</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectGallery screenshots={project.screenshots} />
              </CardContent>
            </Card>

            {/* Features */}
            {/* <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50/50 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Ulanylan tehnologiýalar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 hover:from-blue-50 hover:to-blue-100 hover:text-blue-800 hover:border-blue-300 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Proýekt barada
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Kategoriýa
                  </label>
                  <p className="text-gray-900 capitalize">{project.category}</p>
                </div>
                <Separator />
                {/* <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <p className="text-gray-900 capitalize">{project.status.replace('-', ' ')}</p>
                </div>
                <Separator /> */}
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Sarp edilen wagt
                  </label>
                  <p className="text-gray-900">{project.duration}</p>
                </div>
                <Separator />
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Döredilen senesi
                  </label>
                  <p className="text-gray-900">
                    {new Date(project.createdDate).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* {project.demoUrl && (
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                )} */}
                {project.githubUrl && (
                  <Button asChild className="w-full justify-start" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Githubdaky kody
                    </a>
                  </Button>
                )}
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Yza
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}